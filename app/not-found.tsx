import Heading from "@/components/Heading";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Heading
        title="404"
        subtitle="The page you are looking for no exist"
        center
      />
    </div>
  );
}
