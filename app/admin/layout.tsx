import { getCurrentUser } from "@/actions/getCurrentUser";
import ConfirmModal from "@/components/ConfirmModal";
import Heading from "@/components/Heading";
import { UserMenu } from "@/components/UserMenu";
import { LateralNavBar } from "@/components/LateralNavBar";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Products",
    href: "/admin/products",
  },
  {
    title: "Orders",
    href: "/admin/orders",
  },
  {
    title: "Users",
    href: "/admin/users",
  },
  {
    title: "Categories",
    href: "/admin/categories",
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser?.isAdmin) {
    redirect("/");
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-start justify-between">
        <Heading
          title="Admin"
          subtitle="Manage your account settings and set e-mail preferences."
        />
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/6 overflow-auto">
          <LateralNavBar items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
      <ConfirmModal />
    </div>
  );
}
