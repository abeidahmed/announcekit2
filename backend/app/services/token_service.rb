class TokenService
  SECRET_KEY = Rails.application.secrets.secret_key_base
  ALGORITHM = "HS256".freeze

  class << self
    def encode(payload)
      JWT.encode(payload, SECRET_KEY, ALGORITHM)
    end

    def decode(token)
      JWT.decode(token, SECRET_KEY, true, { algorithm: ALGORITHM }).first
    end
  end
end
