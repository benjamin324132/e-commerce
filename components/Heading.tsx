import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={cn(center ? "text-center" : "text-left")}>
      <h3 className="text-4xl font-extrabold tracking-tight leading-[1.1]">
        {title}
      </h3>
      {subtitle ? (
        <h4 className=" text-muted-foreground">{subtitle}</h4>
      ) : null}
    </div>
  );
};

export default Heading;
