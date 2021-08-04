module V1
  class SessionSerializer < ApplicationSerializer
    attributes :id, :name, :email, :token

    def token
      TokenService.encode(auth_token: object.auth_token)
    end
  end
end
