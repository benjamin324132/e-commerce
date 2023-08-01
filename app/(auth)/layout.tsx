import { getCurrentUser } from "@/actions/getCurrentUser";
import Logo from "@/components/Logo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { redirect } from "next/navigation";

export default async function AuthkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <AspectRatio ratio={16 / 9} className="bg-neutral-200">
        <div className="absolute inset-0">
          <div className="absolute left-8 top-6 z-20">
            <Logo />
          </div>
        </div>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
