class TeamsetsController < ApplicationController
  before_action :set_teamset, only: [:show, :edit, :update, :destroy]

  # GET /teamsets
  # GET /teamsets.json
  def index
    @teamsets = Teamset.all
  end

  # GET /teamsets/1
  # GET /teamsets/1.json
  def show
  end

  # GET /teamsets/new
  def new
    @teamset = Teamset.new
  end

  # GET /teamsets/1/edit
  def edit
  end

  # POST /teamsets
  # POST /teamsets.json
  def create
    @teamset = Teamset.new(teamset_params)

    respond_to do |format|
      if @teamset.save
        format.html { redirect_to @teamset, notice: 'Teamset was successfully created.' }
        format.json { render :show, status: :created, location: @teamset }
      else
        format.html { render :new }
        format.json { render json: @teamset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /teamsets/1
  # PATCH/PUT /teamsets/1.json
  def update
    respond_to do |format|
      if @teamset.update(teamset_params)
        format.html { redirect_to @teamset, notice: 'Teamset was successfully updated.' }
        format.json { render :show, status: :ok, location: @teamset }
      else
        format.html { render :edit }
        format.json { render json: @teamset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /teamsets/1
  # DELETE /teamsets/1.json
  def destroy
    @teamset.destroy
    respond_to do |format|
      format.html { redirect_to teamsets_url, notice: 'Teamset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teamset
      @teamset = Teamset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def teamset_params
      params.fetch(:teamset, {})
    end
end
