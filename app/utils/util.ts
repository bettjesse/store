import { z } from "zod"

export const fileSchema = z.instanceof(File, { message: "Required" })
export const imageSchema = fileSchema.refine(
  file => file.size === 0 || file.type.startsWith("image/")
)