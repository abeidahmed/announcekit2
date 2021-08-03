require "test_helper"

class TokenServiceTest < ActiveSupport::TestCase
  def setup
    @user = { id: 1 }
    @token = TokenService.encode(@user)
  end

  def test_encoding
    assert_not_equal @user, @token
  end

  def test_decoding
    assert_equal @user[:id], TokenService.decode(@token)["id"]
  end
end
