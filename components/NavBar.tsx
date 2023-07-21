import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { UserMenu } from "./UserMenu";
import { CartMenu } from "./Cart";
import SearchForm from "./SearchForm";
import NavMenu from "./NavigationMenu";


const NavBar = () => {
  return (
    <nav className="container py-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex items-center gap-6">
        {/*<Button variant="outline" asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
        <Button asChild>
          <Link href="/signin">Sign in</Link>
        </Button>*/}
        <SearchForm />
        <UserMenu />
        <CartMenu />
      </div>
    </nav>
  );
};

export default NavBar;
