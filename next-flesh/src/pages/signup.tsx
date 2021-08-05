import Link from "next/link"
import { ReactNode } from "react"
import { SignupForm } from "../auth/components/SignupForm"
import Slate from "../layouts/Slate"

function Signup() {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-md p-8 mt-4">
        <SignupForm />
      </div>

      <p className="mt-8 text-center">
        Already have an account?{" "}
        <Link href="/login">
          <a className="text-indigo-600 hover:underline">Login</a>
        </Link>
      </p>
    </>
  )
}

Signup.getLayout = (page: ReactNode) => (
  <Slate title="Sign up for a 14-day free trial" pageTitle="Sign up">
    {page}
  </Slate>
)

export default Signup
