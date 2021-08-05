import Link from "next/link"
import { LoginForm } from "../auth/components/LoginForm"
import Slate from "../layouts/Slate"

export default function Signup() {
  return (
    <Slate title="Login to your account">
      <div className="w-full bg-white shadow-lg rounded-md p-8 mt-4">
        <LoginForm />
      </div>

      <p className="mt-8 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <a className="text-indigo-600 hover:underline">Signup</a>
        </Link>
      </p>
    </Slate>
  )
}
