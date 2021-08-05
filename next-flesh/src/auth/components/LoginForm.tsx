import { useMutation } from "react-query"
import { Form, FORM_ERROR } from "../../components/Form"
import { loginValidation } from "../validations"
import { LabeledTextField } from "../../components/LabeledTextField"
import { loginMutation } from "../mutations/login"

export const LoginForm = () => {
  const { mutateAsync } = useMutation(loginMutation)

  return (
    <Form
      onSubmit={async (values) => {
        try {
          const res = await mutateAsync(values)
          console.log(res)
        } catch (error) {
          return {
            [FORM_ERROR]: "Invalid email or password",
          }
        }
      }}
      initialValues={{ email: "", password: "" }}
      schema={loginValidation}
    >
      {({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <LabeledTextField
            name="email"
            type="email"
            label="Email address"
            required={true}
          />

          <LabeledTextField
            name="password"
            type="password"
            label="Password"
            required={true}
          />

          {submitError && (
            <p className="font-medium text-red-600">{submitError}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full block py-3 px-4 leading-5 text-white font-semibold rounded-md bg-indigo-600 hover:bg-indigo-700"
              disabled={submitting}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </Form>
  )
}
