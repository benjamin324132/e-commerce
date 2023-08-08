import DashboardCards from "@/components/admin/DashboardCards";
import DashboardChart from "@/components/admin/DashboardChart";
import DashboardOrders from "@/components/admin/DashboardOrders";

const Page = () => {
  return (
    <div>
      <DashboardCards />
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <DashboardChart />
        <DashboardOrders />
      </div>
    </div>
  );
};

export default Page;
