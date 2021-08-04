import { ZodError } from "zod"

export const validateZodSchema =
  (schema: any) =>
  (values: any): any => {
    if (!schema) return {}
    try {
      schema.parse(values)
      return {}
    } catch (error) {
      return error.format ? formatZodError(error) : error.toString()
    }
  }

function formatZodError(error: ZodError) {
  if (!error || typeof error.format !== "function") {
    throw new Error(
      "The argument to formatZodError must be a zod error with error.format()"
    )
  }

  const errors = error.format()

  return recursiveFormatZodErrors(errors)
}

function recursiveFormatZodErrors(errors: any) {
  let formattedErrors: Record<string, any> = {}

  for (const key in errors) {
    if (key === "_errors") continue

    if (errors[key]?._errors?.[0]) {
      if (!isNaN(key as any) && !Array.isArray(formattedErrors)) {
        formattedErrors = []
      }

      formattedErrors[key] = errors[key]._errors[0]
    } else {
      if (!isNaN(key as any) && !Array.isArray(formattedErrors)) {
        formattedErrors = []
      }

      formattedErrors[key] = recursiveFormatZodErrors(errors[key])
    }
  }

  return formattedErrors
}
