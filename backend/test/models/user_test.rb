require "test_helper"

class UserTest < ActiveSupport::TestCase
  def test_presence_of_first_name
    user = build(:user, first_name: "")

    assert_not user.valid?
    assert_equal ["can't be blank"], user.errors[:first_name]
  end

  def test_presence_of_email
    user = build(:user, email: "")

    assert_not user.valid?
    assert_equal ["can't be blank", "is invalid"], user.errors[:email]
  end

  def test_duplicate_email
    create(:user, email: "hello@example.com")
    duplicate_user = build(:user, email: "hello@example.com".upcase)

    assert_not duplicate_user.valid?
    assert_equal ["has already been taken"], duplicate_user.errors[:email]
  end

  def test_email_format
    bad_emails = %w[hello hello@ hello@.com]

    bad_emails.each do |email|
      user = build(:user, email: email)

      assert_not user.valid?
      assert_equal ["is invalid"], user.errors[:email]
    end
  end

  def test_presence_of_password
    user = build(:user, password: "")

    assert_not user.valid?
    assert_equal ["can't be blank"], user.errors[:password]
  end

  def test_password_length
    user = build(:user, password: "a" * 5)

    assert_not user.valid?
    assert_equal ["is too short (minimum is 6 characters)"], user.errors[:password]
  end

  def test_user_defaults_to_not_as_admin
    user_params = {
      first_name: "John",
      last_name: "Hamming",
      email: "john@hello.com",
      password: "super_secret"
    }
    user = User.new(user_params)

    assert_not user.admin?
  end

  def test_user_auth_token
    user = create(:user, auth_token: nil)

    assert user.auth_token
  end

  def test_valid_user
    user_params = {
      first_name: "John",
      last_name: "Hamming",
      email: "john@hello.com",
      password: "super_secret"
    }
    user = User.new(user_params)

    assert user.valid?
    assert_equal({}, user.errors.messages)
  end
end
