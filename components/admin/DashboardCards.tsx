import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Receipt, Save, ShoppingCart, User2 } from "lucide-react";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-4 border-none bg-sky-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-black">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-white" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-zinc-500">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="p-4 border-none bg-teal-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-black">Total Users</CardTitle>
          <User2 className="h-4 w-4 text-white" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,324</div>
          <p className="text-xs text-zinc-500">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="p-4 border-none bg-rose-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-black">Total Orders</CardTitle>
          <Receipt className="h-4 w-4 text-white" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,436</div>
          <p className="text-xs text-zinc-500">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="p-4 border-none bg-gradient-to-tr from-red-200 to-purple-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-black">Total Products</CardTitle>
          <ShoppingCart className="h-4 w-4 text-white" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">854</div>
          <p className="text-xs text-zinc-500">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCards;
