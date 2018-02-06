class BjloginsController < ApplicationController
  before_action :set_bjlogin, only: [:show, :edit, :update, :destroy]

  # GET /bjlogins
  # GET /bjlogins.json
  def index
    @bjlogins = Bjlogin.all
  end

  # GET /bjlogins/1
  # GET /bjlogins/1.json
  def show
  end

  # GET /bjlogins/new
  def new
    @bjlogin = Bjlogin.new
  end

  # GET /bjlogins/1/edit
  def edit
  end

  # POST /bjlogins
  # POST /bjlogins.json
  def create
    @bjlogin = Bjlogin.new(bjlogin_params)

    respond_to do |format|
      if @bjlogin.save
        format.html { redirect_to @bjlogin, notice: 'Bjlogin was successfully created.' }
        format.json { render :show, status: :created, location: @bjlogin }
      else
        format.html { render :new }
        format.json { render json: @bjlogin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bjlogins/1
  # PATCH/PUT /bjlogins/1.json
  def update
    respond_to do |format|
      if @bjlogin.update(bjlogin_params)
        format.html { redirect_to @bjlogin, notice: 'Bjlogin was successfully updated.' }
        format.json { render :show, status: :ok, location: @bjlogin }
      else
        format.html { render :edit }
        format.json { render json: @bjlogin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bjlogins/1
  # DELETE /bjlogins/1.json
  def destroy
    @bjlogin.destroy
    respond_to do |format|
      format.html { redirect_to bjlogins_url, notice: 'Bjlogin was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bjlogin
      @bjlogin = Bjlogin.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bjlogin_params
      params.fetch(:bjlogin, {})
    end
end
