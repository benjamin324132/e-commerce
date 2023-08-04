"use client";
import { checkoutSchema } from "@/validations/order";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { createOrder } from "@/actions/orders";
import { User } from "next-auth";
import useCart from "@/hooks/useCart";
import { useToast } from "./ui/use-toast";

export type CheckoutInfo = z.infer<typeof checkoutSchema>;

const CheckoutForm = () => {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const cart = useCart();

  const { ...form } = useForm<CheckoutInfo>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      zipCode: "",
      city: "",
    },
  });

  const onSubmit = async (values: CheckoutInfo) => {
    if (cart.items.length == 0) {
      return;
    }

    startTransition(async () => {
      const productsIds = cart.items.map((i) => i.id);
      try {
        const result = await createOrder(values, productsIds);
        form.reset();
        cart.removeAll();
        toast({
          title: "Order created succesfully",
        });
        console.log(result);
      } catch (error) {
        toast({
          title: "Something went wrong",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="phone" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="address" placeholder="Address" {...field} />
              </FormControl>
              <FormDescription>Enter a valid address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Zip code</FormLabel>
                <FormControl>
                  <Input placeholder="Zipo code" {...field} />
                </FormControl>
                <FormDescription>Ex. 7560</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="md:w-fit h-9 px-20" size="lg" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Order
          </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
