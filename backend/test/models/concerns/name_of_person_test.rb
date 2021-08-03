require "test_helper"

PersonStruct = Class.new(Struct.new(:first_name, :last_name)) do
  include NameOfPerson
end

class NameOfPersonTest < ActiveSupport::TestCase
  def setup
    @user = PersonStruct.new("John", "Manning")
  end

  def test_reading_name
    assert_equal "John Manning", @user.name
  end

  def test_writing_name
    @user.name = NameOfPerson::PersonName.new("May", "Weather")

    assert_equal "May Weather", @user.name
  end
end
