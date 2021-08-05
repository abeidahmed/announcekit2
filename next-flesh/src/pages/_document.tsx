import Document, { Html, Head, Main, NextScript } from "next/document"

export default class ProjectDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="text-gray-900 text-sm min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
