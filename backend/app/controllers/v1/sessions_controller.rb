module V1
  class SessionsController < ApplicationController
    skip_before_action :authenticate, only: %i[create]

    def create
      auth = AuthenticationService.new(session_params)

      if auth.authenticated?
        render json: auth.user, serializer: SessionSerializer
      else
        render json: ErrorSerializer.serialize(invalid: ["credentials"]), status: :unprocessable_entity
      end
    end

    private

    def session_params
      params.require(:session).permit(:email, :password)
    end
  end
end
