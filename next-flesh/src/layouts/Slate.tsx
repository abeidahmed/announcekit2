import { ReactNode } from "react"
import Head from "next/head"
import Image from "next/image"

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
        <div className="w-full">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="Announcekit" height={56} width={56} />
          </div>

          <div className="max-w-md w-full mx-auto mt-3">
            <h1 className="text-2xl font-semibold text-center">{title}</h1>

            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Slate
