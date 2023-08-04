import { getCurrentUser } from "@/actions/getCurrentUser";
import CheckoutForm from "@/components/CheckoutForm";
import Heading from "@/components/Heading";
import OrderSumary from "@/components/OrderSummary";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container">
      <Heading title="Ckeckout" />
      <div className="my-8 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 space-y-4">
          <CheckoutForm />
        </div>
        <OrderSumary />
      </div>
    </div>
  );
};

export default Page;
