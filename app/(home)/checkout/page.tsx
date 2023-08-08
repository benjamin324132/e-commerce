import { getCurrentUser } from "@/actions/getCurrentUser";
import CheckoutForm from "@/components/forms/CheckoutForm";
import Heading from "@/components/Heading";
import OrderSumary from "@/components/OrderSummary";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Order your products",
}

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
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
