import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const DashboardOrders = () => {
  return (
    <Card className=" border-none p-4 bg-yellow-200 col-span-3">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8 mt-4">
          <div className="flex items-center">
            <div className=" p-3 rounded-full bg-black">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div className="ml-2 space-y-1">
              <p className="text-sm font-black leading-none">
                Benjamin Portillo
              </p>
              <p className="text-sm text-muted-foreground">
                benjamin.portillo@email.com
              </p>
            </div>
            <div className="ml-auto font-semibold">$250</div>
          </div>
          <div className="flex items-center">
            <div className=" p-3 rounded-full bg-black">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div className="ml-2 space-y-1">
              <p className="text-sm font-black leading-none">
                Peter Frank
              </p>
              <p className="text-sm text-muted-foreground">
                petero@gmail.com
              </p>
            </div>
            <div className="ml-auto font-semibold">$850</div>
          </div>
          <div className="flex items-center">
            <div className=" p-3 rounded-full bg-black">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div className="ml-2 space-y-1">
              <p className="text-sm font-black leading-none">
                Oscar Thomson
              </p>
              <p className="text-sm text-muted-foreground">
                ooscar@email.com
              </p>
            </div>
            <div className="ml-auto font-semibold">$560</div>
          </div>
          <div className="flex items-center">
            <div className=" p-3 rounded-full bg-black">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div className="ml-2 space-y-1">
              <p className="text-sm font-black leading-none">
                Irvin Wey
              </p>
              <p className="text-sm text-muted-foreground">
                irvin.wey@email.com
              </p>
            </div>
            <div className="ml-auto font-semibold">$199</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardOrders;
