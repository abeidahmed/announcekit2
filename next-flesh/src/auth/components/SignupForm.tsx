import { useMutation } from "react-query"
import { Form } from "../../components/Form"
import { LabeledTextField } from "../../components/LabeledTextField"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { serverError } from "../../utils/serverError"
import { signupMutation } from "../mutations/signup"
import { signupValidation } from "../validations"

export const SignupForm = () => {
  const { mutateAsync } = useMutation(signupMutation)
  const { setUser } = useCurrentUser()

  return (
    <Form
      onSubmit={async (values) => {
        try {
          const res = await mutateAsync(values)
          setUser(res)
        } catch (error) {
          return serverError(error.response.data.errors)
        }
      }}
      schema={signupValidation}
      initialValues={{ name: "", email: "", password: "" }}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <LabeledTextField name="name" label="Full name" required={true} />

          <LabeledTextField
            name="email"
            label="Email address"
            type="email"
            required={true}
          />

          <LabeledTextField
            name="password"
            label="Password"
            type="password"
            required={true}
          />

          <div>
            <button
              type="submit"
              className="w-full block py-3 px-4 leading-5 text-white font-semibold rounded-md bg-indigo-600 hover:bg-indigo-700"
              disabled={submitting}
            >
              Let&apos;s get started
            </button>
          </div>
        </form>
      )}
    </Form>
  )
}
