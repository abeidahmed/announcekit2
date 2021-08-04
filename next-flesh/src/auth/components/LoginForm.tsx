import { Form } from "../../components/Form"
import { loginValidation } from "../validations"
import { LabeledTextField } from "../../components/LabeledTextField"

export const LoginForm = () => {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values)
      }}
      initialValues={{ email: "", password: "" }}
      schema={loginValidation}
    >
      {({ handleSubmit, submitting }) => (
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
