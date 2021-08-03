require "test_helper"

class PersonNameTest < ActiveSupport::TestCase
  def setup
    @name = NameOfPerson::PersonName.new("May", "Weather")
  end

  def test_raises_if_first_name_is_blank
    assert_raise ArgumentError do
      NameOfPerson::PersonName.new(nil)
    end
  end

  def test_last_name_may_be_omitted
    assert_nothing_raised do
      NameOfPerson::PersonName.new("May", nil)
    end
  end

  def test_full_name
    assert_equal "May Weather", @name.full
  end
end
