module Authenticable
  extend ActiveSupport::Concern

  included do
    before_action :authenticate
  end

  private

  def authenticate
    payload = TokenService.decode(auth_token)
    Current.user = User.find_by(auth_token: payload["auth_token"])
  rescue JWT::DecodeError
    render json: ErrorSerializer.serialize(invalid: ["token"]), status: :unauthorized
  end

  def auth_token
    @auth_token ||= request.headers.fetch("Authorization", "").split.last
  end

  # used by pundit
  def current_user
    Current.user
  end
end
