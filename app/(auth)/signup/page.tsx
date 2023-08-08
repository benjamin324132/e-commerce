import Heading from "@/components/Heading";
import SignUpForm from "@/components/forms/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Find your next book",
}

const Page = () => {
  return (
    <div className="max-w-lg mx-auto w-full bg-white rounded-lg">
      <div className="flex flex-col gap-y-2 text-center p-2 md:p-8">
        <Heading title="Sign Up" subtitle="Create a new account" center />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Page;
