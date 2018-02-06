class Regist1sController < ApplicationController
  before_action :set_regist_1, only: [:show, :edit, :update, :destroy]

  # GET /regist_1s
  # GET /regist_1s.json
  def index
    @regist_1s = Regist1.all
  end

  # GET /regist_1s/1
  # GET /regist_1s/1.json
  def show
  end

  # GET /regist_1s/new
  def new
    @regist_1 = Regist1.new
  end

  # GET /regist_1s/1/edit
  def edit
  end

  # POST /regist_1s
  # POST /regist_1s.json
  def create
    @regist_1 = Regist1.new(regist_1_params)

    respond_to do |format|
      if @regist_1.save
        format.html { redirect_to @regist_1, notice: 'Regist 1 was successfully created.' }
        format.json { render :show, status: :created, location: @regist_1 }
      else
        format.html { render :new }
        format.json { render json: @regist_1.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /regist_1s/1
  # PATCH/PUT /regist_1s/1.json
  def update
    respond_to do |format|
      if @regist_1.update(regist_1_params)
        format.html { redirect_to @regist_1, notice: 'Regist 1 was successfully updated.' }
        format.json { render :show, status: :ok, location: @regist_1 }
      else
        format.html { render :edit }
        format.json { render json: @regist_1.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /regist_1s/1
  # DELETE /regist_1s/1.json
  def destroy
    @regist_1.destroy
    respond_to do |format|
      format.html { redirect_to regist_1s_url, notice: 'Regist 1 was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_regist_1
      @regist_1 = Regist1.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def regist_1_params
      params.fetch(:regist_1, {})
    end
end
