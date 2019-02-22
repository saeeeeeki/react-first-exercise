require 'test_helper'

class ReduxExampleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get redux_example_index_url
    assert_response :success
  end

end
