require "test_helper"

module V1
  class UsersControllerTest < ActionDispatch::IntegrationTest
    def test_create_success
      user_params = {
        user: {
          name: "Jane Hemmingway",
          email: "janehemm@example.com",
          password: "secret_password"
        }
      }.to_json

      assert_difference "User.count", 1 do
        post v1_users_path, params: user_params, headers: json_header
      end

      assert_response :created
      assert_equal %i[name email token], attribute_keys
    end

    def test_create_failure
      user_params = {
        user: {
          name: "Jane Hemmingway",
          email: "janehemm@example.com",
          password: ""
        }
      }.to_json

      assert_difference "User.count", 0 do
        post v1_users_path, params: user_params, headers: json_header
      end

      assert_response :unprocessable_entity
      assert_equal %i[password], error_types
    end
  end
end
