class TimesetsController < ApplicationController
  before_action :set_timeset, only: [:show, :edit, :update, :destroy]

  # GET /timesets
  # GET /timesets.json
  def index
    @timesets = Timeset.all
  end

  # GET /timesets/1
  # GET /timesets/1.json
  def show
  end

  # GET /timesets/new
  def new
    @timeset = Timeset.new
  end

  # GET /timesets/1/edit
  def edit
  end

  # POST /timesets
  # POST /timesets.json
  def create
    @timeset = Timeset.new(timeset_params)

    respond_to do |format|
      if @timeset.save
        format.html { redirect_to @timeset, notice: 'Timeset was successfully created.' }
        format.json { render :show, status: :created, location: @timeset }
      else
        format.html { render :new }
        format.json { render json: @timeset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /timesets/1
  # PATCH/PUT /timesets/1.json
  def update
    respond_to do |format|
      if @timeset.update(timeset_params)
        format.html { redirect_to @timeset, notice: 'Timeset was successfully updated.' }
        format.json { render :show, status: :ok, location: @timeset }
      else
        format.html { render :edit }
        format.json { render json: @timeset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /timesets/1
  # DELETE /timesets/1.json
  def destroy
    @timeset.destroy
    respond_to do |format|
      format.html { redirect_to timesets_url, notice: 'Timeset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timeset
      @timeset = Timeset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def timeset_params
      params.fetch(:timeset, {})
    end
end
