require 'test_helper'

class DotTodosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dot_todos_index_url
    assert_response :success
  end

end
