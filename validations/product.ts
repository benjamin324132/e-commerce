import * as z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must be at least 3 characters" })
    .max(30, { message: "Product name must be less than 30 characters" }),
  slug: z.string().regex(/^[a-z](-?[a-z])*$/,{message: "Please enter a valid slug"}).nonempty({message: "Slug must be at last 1 character"}),
  description: z.string().optional(),
  category: z.string().nonempty({message: "Please select a category"}),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Must be a valid price",
  }),
  image: z.any()
  //.url({message: "Please add a valid image url"})
});
