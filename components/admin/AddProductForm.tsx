"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { productSchema } from "@/validations/product";
import { Textarea } from "../ui/textarea";
import { addProduct, deleteProduct, updateProduct } from "@/actions/products";
import { allCategories } from "@/config/categories";
import { useToast } from "../ui/use-toast";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { confirmDialog } from "@/hooks/useConfirmDialog";

export type ProductType = z.infer<typeof productSchema>;

interface AddProductFormProps {
  product: Product | null;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || "",
      slug: product?.slug || "",
      category: product?.category || "",
      description: product?.description || "",
      price: product?.price || "",
      image: product?.image || "",
    },
  });

  const onSubmit = (values: ProductType) => {
    startTransition(async () => {
      try {
        if (product) {
          const updatedProduct = await updateProduct(values, product.id);
          router.refresh();
          toast({
            title: "Product updated",
          });
        } else {
          const newProduct = await addProduct(values);
          form.reset();
          router.refresh();
          toast({
            title: "Product added",
          });
        }
      } catch (error: any) {
        console.log(error);
        toast({
          title: "Something went wrong",
          description: error.message,
        });
      }
    });
  };

  const onDelete = (id: string) => {
    confirmDialog(`You are deleting ${product?.name} from products`, () => {
      startTransition(async () => {
        try {
          await deleteProduct(id);
          router.replace("/admin/products");
          toast({
            title: "Deleted succesfully",
          });
        } catch (error) {
          toast({
            title: "Something went wrong",
          });
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4 md:max-w-xl"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Product nanme" {...field} />
              </FormControl>
              <FormDescription>
                Please enter a valid product name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="Product slug" {...field} />
              </FormControl>
              <FormDescription>
                Please enter a unique slug ex. my-product-name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {allCategories.map((cat) => (
                          <SelectItem
                            key={cat.slug}
                            value={cat.slug.replace("/", "")}
                          >
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Product price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="file" placeholder="Product image" {...field} />
              </FormControl>
              <FormDescription>Image file must be max 3MB</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button className="w-fit" size="lg" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {product ? "Update" : "Create"}
          </Button>
          {product ? (
            <Button
              onClick={() => onDelete(product.id)}
              type="button"
              variant="destructive"
              className="w-fit"
              size="lg"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Trash className="mr-2 h-4 w-4" />
              )}
              Delete
            </Button>
          ) : null}
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
