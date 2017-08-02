require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get service" do
    get main_service_url
    assert_response :success
  end

end
