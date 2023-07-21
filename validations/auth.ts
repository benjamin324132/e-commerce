import * as z from "zod";

export const signInSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6, { message: "Please enter at least 6 characters password"}).max(20, {message: "Please enter less than 20 characters password"})
});

export const signUpSchema = z.object({
    name: z.string().min(3, { message: "Please enter at least 3 characters name"}).max(40, {message: "Please enter less than 40 characters name"}),
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6, { message: "Please enter at least 6 characters password"}).max(20, {message: "Please enter less than 20 characters password"})
});