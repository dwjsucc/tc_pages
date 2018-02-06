class ShouyesController < ApplicationController
  before_action :set_shouye, only: [:show, :edit, :update, :destroy]

  # GET /shouyes
  # GET /shouyes.json
  def index
    @shouyes = Shouye.all
  end

  # GET /shouyes/1
  # GET /shouyes/1.json
  def show
  end

  # GET /shouyes/new
  def new
    @shouye = Shouye.new
  end

  # GET /shouyes/1/edit
  def edit
  end

  # POST /shouyes
  # POST /shouyes.json
  def create
    @shouye = Shouye.new(shouye_params)

    respond_to do |format|
      if @shouye.save
        format.html { redirect_to @shouye, notice: 'Shouye was successfully created.' }
        format.json { render :show, status: :created, location: @shouye }
      else
        format.html { render :new }
        format.json { render json: @shouye.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shouyes/1
  # PATCH/PUT /shouyes/1.json
  def update
    respond_to do |format|
      if @shouye.update(shouye_params)
        format.html { redirect_to @shouye, notice: 'Shouye was successfully updated.' }
        format.json { render :show, status: :ok, location: @shouye }
      else
        format.html { render :edit }
        format.json { render json: @shouye.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shouyes/1
  # DELETE /shouyes/1.json
  def destroy
    @shouye.destroy
    respond_to do |format|
      format.html { redirect_to shouyes_url, notice: 'Shouye was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shouye
      @shouye = Shouye.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shouye_params
      params.fetch(:shouye, {})
    end
end
