import DashboardCard from "@/components/DashboardCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { formatNumber } from "@/lib/formatter";
import { formatPrice } from "../utils/format";

const getSaleInfo = async () => {
  const data = await db.order.aggregate({
    _sum: { price: true },
    _count: true,
  });
  return {
    price: (data._sum.price || 0) ,
    salesCount: data._count,
  };
};

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
const AdminDashboard = async () => {
    const [sales, userInfo] =  await Promise.all([
         getSaleInfo(),
    getUserData()
    ])
 
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(sales.salesCount)}Orders`}
        body={ formatPrice(sales.price)}
      />
      <DashboardCard
        title="Customer"
        subtitle={`${formatNumber(userInfo.averageValuePerUser)}Average value`}
        body={formatNumber(userInfo.user)}
      />
    </div>
  );
};

export default AdminDashboard;
