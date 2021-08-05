import { ReactNode } from "react"

interface SlateProps {
  title: string
  children: ReactNode
}

export default function Slate({ title, children }: SlateProps) {
  return (
    <main className="flex justify-center py-16 bg-gray-100 min-h-screen">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center">{title}</h1>

        {children}
      </div>
    </main>
  )
}
