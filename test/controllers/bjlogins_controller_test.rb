require 'test_helper'

class BjloginsControllerTest < ActionController::TestCase
  setup do
    @bjlogin = bjlogins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bjlogins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bjlogin" do
    assert_difference('Bjlogin.count') do
      post :create, bjlogin: {  }
    end

    assert_redirected_to bjlogin_path(assigns(:bjlogin))
  end

  test "should show bjlogin" do
    get :show, id: @bjlogin
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bjlogin
    assert_response :success
  end

  test "should update bjlogin" do
    patch :update, id: @bjlogin, bjlogin: {  }
    assert_redirected_to bjlogin_path(assigns(:bjlogin))
  end

  test "should destroy bjlogin" do
    assert_difference('Bjlogin.count', -1) do
      delete :destroy, id: @bjlogin
    end

    assert_redirected_to bjlogins_path
  end
end
