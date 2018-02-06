require 'test_helper'

class SearchpasswordsControllerTest < ActionController::TestCase
  setup do
    @searchpassword = searchpasswords(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:searchpasswords)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create searchpassword" do
    assert_difference('Searchpassword.count') do
      post :create, searchpassword: {  }
    end

    assert_redirected_to searchpassword_path(assigns(:searchpassword))
  end

  test "should show searchpassword" do
    get :show, id: @searchpassword
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @searchpassword
    assert_response :success
  end

  test "should update searchpassword" do
    patch :update, id: @searchpassword, searchpassword: {  }
    assert_redirected_to searchpassword_path(assigns(:searchpassword))
  end

  test "should destroy searchpassword" do
    assert_difference('Searchpassword.count', -1) do
      delete :destroy, id: @searchpassword
    end

    assert_redirected_to searchpasswords_path
  end
end
