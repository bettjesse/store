import DashboardCard from "@/components/DashboardCard";

import { db } from "@/lib/db";
import { formatNumber, formatCurrency } from "@/lib/formatter";
import { formatPrice } from "../utils/format";

const getSaleInfo = async () => {
  const data = await db.order.aggregate({
    _sum: { price: true },
    _count: true,
  });
  await wait(2000)
  return {
    price: (data._sum.price || 0) ,
    salesCount: data._count,
  };
};
const wait = (duration:number) => {
return new Promise (resolve=> setTimeout(resolve, duration))
}
const getUserData = async () => {
  const [user, orderinfo] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { price: true },
    }),
  ]);
  return {
    user,
    averageValuePerUser:user ===  0 ? 0 : (orderinfo._sum.price || 0 ) / user 
  }
};

const getProductData = async()=> {
  const [activeCount, inactiveCount]=  await Promise.all([
    db.product.count({where: {isAvailable : true}}),
    db.product.count({where: {isAvailable : false}})
  ])
return { activeCount, inactiveCount}
}
const AdminDashboard = async () => {
    const [sales, userInfo,productData] =  await Promise.all([
         getSaleInfo(),
    getUserData(),
    getProductData()
    ])
 
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(sales.salesCount)}Orders`}
        body={ formatCurrency(sales.price)}
      />
      <DashboardCard
        title="Customer"
        subtitle={`${formatNumber(userInfo.averageValuePerUser)}Average value`}
        body={formatNumber(userInfo.user)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveCount)}Inactive products`}
        body={formatNumber(productData.activeCount)}
      />
    </div>
  );
};

export default AdminDashboard;
