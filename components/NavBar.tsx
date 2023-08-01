import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { UserMenu } from "./UserMenu";
import { CartMenu } from "./Cart";
import SearchForm from "./SearchForm";
import NavMenu from "./NavigationMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { User2 } from "lucide-react";

const NavBar = async () => {
  const user = await getCurrentUser();
  const link = user ? (user.isAdmin ? "/admin" : "/account") : "/signin";
  return (
    <nav className="container py-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex items-center gap-6">
        <SearchForm />
        <Link href={link}>
          <User2 className="w-7 h-7 cursor-pointer" />
        </Link>
        <CartMenu />
      </div>
    </nav>
  );
};

export default NavBar;
