import { z } from "zod";
export const AddressSchema = z.object({
  address: z.string().min(1, { message: "Required" }),
  city: z.string().min(1, { message: "Required" }),
  state: z.string().min(1, { message: "Required" }),
  pincode: z
    .string()
    .trim()
    .length(6)
    .regex(new RegExp(/^[0-9]+$/)),
  phone: z
    .string()
    .trim()
    .length(10)
    .regex(new RegExp(/^[0-9]+$/)),
});
