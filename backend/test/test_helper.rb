ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

Dir[Rails.root.join("test/helpers/**/*.rb")].each { |f| require f }

module ActiveSupport
  class TestCase
    include FactoryBot::Syntax::Methods
    include HeadersHelper
    include RequestsHelper

    # Run tests in parallel with specified workers
    parallelize(workers: :number_of_processors)
  end
end
