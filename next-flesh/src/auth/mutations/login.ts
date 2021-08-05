import { z } from "zod"
import { axiosInstance } from "../../utils/axiosInstance"
import { SessionObject } from "../interfaces"
import { loginValidation } from "../validations"

export const loginMutation = async ({
  email,
  password,
}: z.infer<typeof loginValidation>): Promise<SessionObject> => {
  const { data: { data } = {} } = await axiosInstance.post("/v1/sessions", {
    session: {
      email,
      password,
    },
  })

  return data
}
