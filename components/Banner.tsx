import Heading from "./Heading";

const Banner = () => {
  return (
    <div className="w-full h-48 bg-yellow-300 flex items-center justify-center">
      <Heading
        title="Get 10% off"
        subtitle="Sign up and get your discount"
        center
      />
    </div>
  );
};

export default Banner;
