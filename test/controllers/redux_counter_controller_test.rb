require 'test_helper'

class ReduxCounterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get redux_counter_index_url
    assert_response :success
  end

end
