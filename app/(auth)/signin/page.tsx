import Heading from "@/components/Heading";
import SignInForm from "@/components/forms/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Find your next book",
}

const Page = () => {
  return (
    <div className="max-w-lg mx-auto w-full bg-white rounded-lg">
      <div className="flex flex-col gap-y-2 text-center p-2 md:p-8">
        <Heading title="Sign In" subtitle="Sign in to your account" center />
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
