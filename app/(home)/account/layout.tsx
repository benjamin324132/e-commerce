import { getCurrentUser } from "@/actions/getCurrentUser";
import Heading from "@/components/Heading";
import { LateralNavBar } from "@/components/LateralNavBar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { redirect } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/account",
  },
  {
    title: "Orders",
    href: "/account/orders",
  },
  {
    title: "Info",
    href: "/account/info",
  },
];

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your account",
}

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-start justify-between">
        <Heading
          title="My Account"
          subtitle={`Hi ${user?.name} welcome back`}
        />
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/6 overflow-auto">
          <LateralNavBar items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
