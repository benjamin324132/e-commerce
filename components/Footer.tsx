import { allCategories } from "@/config/categories";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t bg-neutral-50">
      <div className=" max-w-4xl mx-auto py-12 px-4 grid gap-4 items-start  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className=" text-lg font-semibold">Products</h3>
          <div className="flex flex-col gap-2">
            {allCategories.map((cat) => (
              <Link href={cat.slug} key={cat.slug}>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-semibold">Site</h3>
          <div className="flex flex-col gap-2">
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Press</Link>
            <Link href="#">Vision</Link>
            <Link href="#">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-semibold">Colections</h3>
          <div className="flex flex-col gap-2">
            <Link href="#">Summer 2023</Link>
            <Link href="#">Cinema</Link>
            <Link href="#">Yellow Alert</Link>
            <Link href="#">School</Link>
          </div>
        </div>
        <div>
          <h3 className=" text-lg font-semibold">Social</h3>
          <div className="flex flex-col gap-2">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Snapchat</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Pinterest</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
