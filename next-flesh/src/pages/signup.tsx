import Link from "next/link"
import { SignupForm } from "../auth/components/SignupForm"
import Slate from "../layouts/Slate"

export default function Signup() {
  return (
    <Slate title="Sign up for a 14-day free trial">
      <div className="w-full bg-white shadow-lg rounded-md p-8 mt-4">
        <SignupForm />
      </div>

      <p className="mt-8 text-center">
        Already have an account?{" "}
        <Link href="/login">
          <a className="text-indigo-600 hover:underline">Login</a>
        </Link>
      </p>
    </Slate>
  )
}
