import Link from "next/link"
import { ReactNode } from "react"
import { LoginForm } from "../auth/components/LoginForm"
import Slate from "../layouts/Slate"

function Login() {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-md p-8 mt-4">
        <LoginForm />
      </div>

      <p className="mt-8 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <a className="text-indigo-600 hover:underline">Signup</a>
        </Link>
      </p>
    </>
  )
}

Login.getLayout = (page: ReactNode) => (
  <Slate title="Login to your account" pageTitle="Login">
    {page}
  </Slate>
)

export default Login
