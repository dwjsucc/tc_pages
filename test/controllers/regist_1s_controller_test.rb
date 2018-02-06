require 'test_helper'

class Regist1sControllerTest < ActionController::TestCase
  setup do
    @regist_1 = regist_1s(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:regist_1s)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create regist_1" do
    assert_difference('Regist1.count') do
      post :create, regist_1: {  }
    end

    assert_redirected_to regist_1_path(assigns(:regist_1))
  end

  test "should show regist_1" do
    get :show, id: @regist_1
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @regist_1
    assert_response :success
  end

  test "should update regist_1" do
    patch :update, id: @regist_1, regist_1: {  }
    assert_redirected_to regist_1_path(assigns(:regist_1))
  end

  test "should destroy regist_1" do
    assert_difference('Regist1.count', -1) do
      delete :destroy, id: @regist_1
    end

    assert_redirected_to regist_1s_path
  end
end
