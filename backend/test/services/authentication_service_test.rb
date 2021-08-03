require "test_helper"

class AuthenticationServiceTest < ActiveSupport::TestCase
  def test_returns_user_if_authenticated
    user = create(:user)
    auth = AuthenticationService.new(email: user.email, password: user.password)

    assert_equal user, auth.user
  end

  def test_case_insensitive_email
    user = create(:user)
    auth = AuthenticationService.new(email: user.email.upcase, password: user.password)

    assert_equal user, auth.user
  end

  def test_returns_nil_if_credentials_do_not_match
    user = create(:user)
    auth = AuthenticationService.new(email: user.email.upcase, password: "invalid")

    assert_nil auth.user
  end
end
