import Heading from "@/components/Heading";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Heading
        title="Product not found"
        subtitle="Please check the url is correct"
        center
      />
    </div>
  );
}
