"use client";

import { signInSchema } from "@/validations/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

type SignInData = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInData) => {
    setIsLoading(true);
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
      .then((callback) => {
        console.log(callback);
        if (callback?.error) {
          console.log(callback.error);
          toast({
            title: "Something went wrong",
            description: callback.error,
          });
          return;
        }

        if (callback?.ok) {
          router.push("/");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4 text-left"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}{" "}
          Sign In
        </Button>
      </form>
      <div className="flex">
        <h3>Dont have an account?</h3>
        <Link href="/signup" className="font-semibold">
          Create one
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;
