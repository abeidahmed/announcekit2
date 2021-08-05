import React from "react"
import { useField } from "react-final-form"

interface LabeledTextFieldProps extends React.HTMLProps<HTMLInputElement> {
  name: string
  label?: string
  htmlFor?: string
  type?: "text" | "email" | "password" | "number"
}

export const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  name,
  label,
  type = "text",
  htmlFor,
  ...props
}) => {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, {
    parse: type === "number" ? Number : undefined,
  })

  const normalizedError = Array.isArray(error)
    ? error.join(", ")
    : error || submitError

  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="font-medium mb-2 inline-block text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        {...input}
        type={type}
        id={htmlFor || name}
        className="block w-full rounded-md border-gray-300"
        disabled={submitting}
        {...props}
      />

      {touched && normalizedError && (
        <p role="alert" className="mt-1 text-red-600 font-medium">
          {normalizedError}
        </p>
      )}
    </div>
  )
}
