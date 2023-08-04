import { Skeleton } from "@/components/ui/skeleton";
import { ImageIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Loading = () => {
  return (
    <div className="py-16">
      <div className="container pb-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <Skeleton className="relative aspect-square w-full h-full grid place-items-center">
            <ImageIcon className="w-8 h-8" />
          </Skeleton>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-1/2">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-8 w-[300px]" />
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-8 w-[100px]" />
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((i) => (
            <Card className="overflow-hidden border-none shadow-none rounded-none">
              <CardHeader className="p-0">
                <AspectRatio ratio={8 / 9}>
                  <Skeleton className="relative w-full h-full grid place-items-center">
                    <ImageIcon className="w-8 h-8" />
                  </Skeleton>
                </AspectRatio>
              </CardHeader>
              <CardContent className="mt-3 p-0 space-y-2">
                <CardTitle>
                  <Skeleton className="h-6 w-[250px]" />
                </CardTitle>
                <CardDescription className=" line-clamp-2">
                  <Skeleton className="h-5 w-[200px]" />
                </CardDescription>
              </CardContent>
              <CardFooter className="pl-0">
                <Skeleton className="h-4 w-[100px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
