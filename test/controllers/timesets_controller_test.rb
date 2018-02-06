require 'test_helper'

class TimesetsControllerTest < ActionController::TestCase
  setup do
    @timeset = timesets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:timesets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create timeset" do
    assert_difference('Timeset.count') do
      post :create, timeset: {  }
    end

    assert_redirected_to timeset_path(assigns(:timeset))
  end

  test "should show timeset" do
    get :show, id: @timeset
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @timeset
    assert_response :success
  end

  test "should update timeset" do
    patch :update, id: @timeset, timeset: {  }
    assert_redirected_to timeset_path(assigns(:timeset))
  end

  test "should destroy timeset" do
    assert_difference('Timeset.count', -1) do
      delete :destroy, id: @timeset
    end

    assert_redirected_to timesets_path
  end
end
