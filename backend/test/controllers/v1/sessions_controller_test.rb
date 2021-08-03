require "test_helper"

module V1
  class SessionsControllerTest < ActionDispatch::IntegrationTest
    def test_create_success
      user = create(:user)
      session_params = {
        session: {
          email: user.email,
          password: user.password
        }
      }.to_json

      post v1_sessions_path, params: session_params, headers: json_header

      assert_response :ok
      assert_equal %i[name email token], attribute_keys
    end

    def test_create_failure
      session_params = {
        session: {
          email: "invalid@example.com",
          password: "hello"
        }
      }.to_json

      post v1_sessions_path, params: session_params, headers: json_header

      assert_response :unprocessable_entity
      assert_equal %i[invalid], error_types
    end
  end
end
