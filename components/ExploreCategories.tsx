import Link from "next/link";
import Heading from "./Heading";

const ExploreCategories = () => {
  return (
    <div className="container pt-32">
      <Heading
        title="Categories"
        subtitle="Explore top categories and find the best for you"
        center
      />
      <div className="grid place-items-center grid-cols-1 md:grid-cols-4 gap-6 py-12">
        <div className="bg-yellow-400 w-full h-96 rounded-md flex items-center justify-center cursor-pointer hover:opacity-70 transition">
          <h3 className="text-4xl font-semibold text-white">Category 1</h3>
        </div>
        <div className="bg-blue-600 w-full h-96 rounded-md flex items-center justify-center cursor-pointer hover:opacity-70 transition">
          <h3 className="text-4xl font-semibold text-white">Category 2</h3>
        </div>
        <div className="bg-purple-500 w-full h-96 rounded-md flex items-center justify-center cursor-pointer hover:opacity-70 transition">
          <h3 className="text-4xl font-semibold text-white">Category 3</h3>
        </div>
        <div className="bg-rose-400 w-full h-96 rounded-md flex items-center justify-center cursor-pointer hover:opacity-70 transition">
          <h3 className="text-4xl font-semibold text-white">Category 4</h3>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
