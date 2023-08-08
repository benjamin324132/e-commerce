import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { UserMenu } from "./UserMenu";
import { CartMenu } from "./Cart";
import SearchForm from "./forms/SearchForm";
import NavMenu from "./NavigationMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { User2 } from "lucide-react";
import MobileNav from "./MobileNav";

const NavBar = async () => {
  const user = await getCurrentUser();
  const link = user ? (user.isAdmin ? "/admin" : "/account") : "/signin";
  return (
    <nav className="container py-6 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:flex">
          <SearchForm />
        </div>
        <Link href={link}>
          <User2 className="w-7 h-7 cursor-pointer" />
        </Link>
        <CartMenu />
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
