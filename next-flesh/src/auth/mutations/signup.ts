import { z } from "zod"
import { axiosInstance } from "../../utils/axiosInstance"
import { SessionObject } from "../interfaces"
import { signupValidation } from "../validations"

export const signupMutation = async ({
  name,
  email,
  password,
}: z.infer<typeof signupValidation>): Promise<SessionObject> => {
  const { data: { data } = {} } = await axiosInstance.post("/v1/users", {
    user: {
      name,
      email,
      password,
    },
  })

  return data
}
