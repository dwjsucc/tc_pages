require 'test_helper'

class TeamsetsControllerTest < ActionController::TestCase
  setup do
    @teamset = teamsets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:teamsets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create teamset" do
    assert_difference('Teamset.count') do
      post :create, teamset: {  }
    end

    assert_redirected_to teamset_path(assigns(:teamset))
  end

  test "should show teamset" do
    get :show, id: @teamset
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @teamset
    assert_response :success
  end

  test "should update teamset" do
    patch :update, id: @teamset, teamset: {  }
    assert_redirected_to teamset_path(assigns(:teamset))
  end

  test "should destroy teamset" do
    assert_difference('Teamset.count', -1) do
      delete :destroy, id: @teamset
    end

    assert_redirected_to teamsets_path
  end
end
