class QinmisetsController < ApplicationController
  before_action :set_qinmiset, only: [:show, :edit, :update, :destroy]

  # GET /qinmisets
  # GET /qinmisets.json
  def index
    @qinmisets = Qinmiset.all
  end

  # GET /qinmisets/1
  # GET /qinmisets/1.json
  def show
  end

  # GET /qinmisets/new
  def new
    @qinmiset = Qinmiset.new
  end

  # GET /qinmisets/1/edit
  def edit
  end

  # POST /qinmisets
  # POST /qinmisets.json
  def create
    @qinmiset = Qinmiset.new(qinmiset_params)

    respond_to do |format|
      if @qinmiset.save
        format.html { redirect_to @qinmiset, notice: 'Qinmiset was successfully created.' }
        format.json { render :show, status: :created, location: @qinmiset }
      else
        format.html { render :new }
        format.json { render json: @qinmiset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /qinmisets/1
  # PATCH/PUT /qinmisets/1.json
  def update
    respond_to do |format|
      if @qinmiset.update(qinmiset_params)
        format.html { redirect_to @qinmiset, notice: 'Qinmiset was successfully updated.' }
        format.json { render :show, status: :ok, location: @qinmiset }
      else
        format.html { render :edit }
        format.json { render json: @qinmiset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /qinmisets/1
  # DELETE /qinmisets/1.json
  def destroy
    @qinmiset.destroy
    respond_to do |format|
      format.html { redirect_to qinmisets_url, notice: 'Qinmiset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_qinmiset
      @qinmiset = Qinmiset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def qinmiset_params
      params.fetch(:qinmiset, {})
    end
end
