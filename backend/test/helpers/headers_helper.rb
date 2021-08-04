module HeadersHelper
  def json_header(user = nil)
    header_hash = { "Content-Type" => "application/json" }
    return header_hash unless user

    header_hash.merge(Authorization: "Bearer #{TokenService.encode(auth_token: user.auth_token)}")
  end
end
