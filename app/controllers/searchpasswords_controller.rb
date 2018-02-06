class SearchpasswordsController < ApplicationController
  before_action :set_searchpassword, only: [:show, :edit, :update, :destroy]

  # GET /searchpasswords
  # GET /searchpasswords.json
  def index
    @searchpasswords = Searchpassword.all
  end

  # GET /searchpasswords/1
  # GET /searchpasswords/1.json
  def show
  end

  # GET /searchpasswords/new
  def new
    @searchpassword = Searchpassword.new
  end

  # GET /searchpasswords/1/edit
  def edit
  end

  # POST /searchpasswords
  # POST /searchpasswords.json
  def create
    @searchpassword = Searchpassword.new(searchpassword_params)

    respond_to do |format|
      if @searchpassword.save
        format.html { redirect_to @searchpassword, notice: 'Searchpassword was successfully created.' }
        format.json { render :show, status: :created, location: @searchpassword }
      else
        format.html { render :new }
        format.json { render json: @searchpassword.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /searchpasswords/1
  # PATCH/PUT /searchpasswords/1.json
  def update
    respond_to do |format|
      if @searchpassword.update(searchpassword_params)
        format.html { redirect_to @searchpassword, notice: 'Searchpassword was successfully updated.' }
        format.json { render :show, status: :ok, location: @searchpassword }
      else
        format.html { render :edit }
        format.json { render json: @searchpassword.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /searchpasswords/1
  # DELETE /searchpasswords/1.json
  def destroy
    @searchpassword.destroy
    respond_to do |format|
      format.html { redirect_to searchpasswords_url, notice: 'Searchpassword was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_searchpassword
      @searchpassword = Searchpassword.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def searchpassword_params
      params.fetch(:searchpassword, {})
    end
end
