require 'test_helper'

class BoardGameControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get board_game_index_url
    assert_response :success
  end

end
