interface ServerErrorProps {
  detail: string
  source: {
    pointer: string
  }
  type: string
}

export const serverError = (errors: Array<ServerErrorProps>) => {
  const normalizedErrors: { [key: string]: string } = {}

  errors.forEach((error) => {
    normalizedErrors[error.type] = error.detail
  })

  return normalizedErrors
}
