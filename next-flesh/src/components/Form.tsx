import { ReactNode, PropsWithoutRef } from "react"
import {
  Form as FinalForm,
  FormProps as FinalFormProps,
  FormRenderProps,
} from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "../utils/validateZodSchema"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children: (
    props: FormRenderProps<z.TypeOf<S>, Partial<z.TypeOf<S>>>
  ) => ReactNode
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  schema,
  initialValues,
  onSubmit,
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={(props) => children(props)}
    />
  )
}
