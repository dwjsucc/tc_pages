require 'test_helper'

class ShouyesControllerTest < ActionController::TestCase
  setup do
    @shouye = shouyes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shouyes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shouye" do
    assert_difference('Shouye.count') do
      post :create, shouye: {  }
    end

    assert_redirected_to shouye_path(assigns(:shouye))
  end

  test "should show shouye" do
    get :show, id: @shouye
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shouye
    assert_response :success
  end

  test "should update shouye" do
    patch :update, id: @shouye, shouye: {  }
    assert_redirected_to shouye_path(assigns(:shouye))
  end

  test "should destroy shouye" do
    assert_difference('Shouye.count', -1) do
      delete :destroy, id: @shouye
    end

    assert_redirected_to shouyes_path
  end
end
