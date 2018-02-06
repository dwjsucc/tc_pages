require 'test_helper'

class QinmisetsControllerTest < ActionController::TestCase
  setup do
    @qinmiset = qinmisets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:qinmisets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create qinmiset" do
    assert_difference('Qinmiset.count') do
      post :create, qinmiset: {  }
    end

    assert_redirected_to qinmiset_path(assigns(:qinmiset))
  end

  test "should show qinmiset" do
    get :show, id: @qinmiset
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @qinmiset
    assert_response :success
  end

  test "should update qinmiset" do
    patch :update, id: @qinmiset, qinmiset: {  }
    assert_redirected_to qinmiset_path(assigns(:qinmiset))
  end

  test "should destroy qinmiset" do
    assert_difference('Qinmiset.count', -1) do
      delete :destroy, id: @qinmiset
    end

    assert_redirected_to qinmisets_path
  end
end
