import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";

const SearchForm = () => {
  const onsubmit = async (e: FormData) => {
    "use server";
    const q = e.get("search");
    redirect(`/search?q=${q}`);
  };
  
  return (
    <>
      <div className=" md:hidden">
        <Search className="w-7 h-7 cursor-pointer" />
      </div>
      <form action={onsubmit} className="relative hidden md:flex items-center">
        <Search className="absolute left-0 top-2 w-6 h-6 pl-2" />
        <Input
          className="pl-8 bg-neutral-100/70 border-none"
          placeholder="Search"
          name="search"
        />
      </form>
    </>
  );
};

export default SearchForm;
