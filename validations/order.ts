import * as z from "zod";

export const checkoutSchema = z.object({
    name: z.string().nonempty({message: "Please provide a name"}),
    lastName: z.string().nonempty({message: "Please provide a lastname"}),
    email: z.string().email({message: "Please provide an email"}),
    address: z.string().nonempty({message: "Please provide an address"}),
    phone: z.string().min(6,{message: "Please provide a phone number"}),
    zipCode: z.string().min(4,{message: "Please provide a zip code"}),
    city: z.string().nonempty({message: "Please provide a city name"}),
})