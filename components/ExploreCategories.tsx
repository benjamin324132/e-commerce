import { Button } from "./ui/button";
import Image from "next/image";

const ExploreCategories = () => {
  return (
    <div className="my-32">
      <div className="w-full h-[calc(100vh-74px)] bg-black md:p-20">
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col gap-4 justify-center p-4 md:p-0">
            <h3 className="text-4xl font-black text-white">Enter in Scene</h3>
            <p className=" text-xl font-semibold text-white">
              Everybody has an story. Find your next story
            </p>
            <Button className=" bg-white text-black hover:bg-gray-100 w-32">
              Shop
            </Button>
          </div>
          <div className="relative w-full h-full aspect-square overflow-hidden">
            <Image
              src="/images/hero.jpg"
              fill
              alt="background"
              className="object-cover aspect-square"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
