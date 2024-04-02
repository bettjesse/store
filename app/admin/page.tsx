import DashboardCard from "@/components/DashboardCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { formatCurrency, formatNumber } from "@/lib/formatter";

const getSaleInfo = async () => {
  const data = await db.order.aggregate({
    _sum: { pricePaidIncents: true },
    _count: true,
  });
  return {
    price: (data._sum.pricePaidIncents || 0) / 100,
    salesCount: data._count,
  };
};

const getUserData = async () => {
  const [user, orderinfo] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidIncents: true },
    }),
  ]);
  return {
    user,
    averageValuePerUser:user ===  0 ? 0 : (orderinfo._sum.pricePaidIncents || 0 ) / user /100
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
        body={formatCurrency(sales.price)}
      />
      <DashboardCard
        title="Customer"
        subtitle={`${formatNumber(userInfo.averageValuePerUser)}Average value`}
        body={formatCurrency(userInfo.user)}
      />
    </div>
  );
};

export default AdminDashboard;
