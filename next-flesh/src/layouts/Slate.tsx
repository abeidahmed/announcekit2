import { ReactNode } from "react"
import Head from "next/head"

interface SlateProps {
  pageTitle?: string
  title: string
  children: ReactNode
}

const Slate = ({ title, pageTitle, children }: SlateProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle || "Announcekit"}</title>
      </Head>

      <main className="flex justify-center py-16 bg-gray-100 min-h-screen">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-semibold text-center">{title}</h1>

          {children}
        </div>
      </main>
    </>
  )
}

export default Slate
