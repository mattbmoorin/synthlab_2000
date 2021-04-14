class PresetsController < ApplicationController
  before_action :set_preset, only: [:show, :update, :destroy]

  # GET /presets
  def index
    @presets = Preset.all

    render json: @presets
  end

  # GET /presets/1
  def show
    render json: @preset
  end

  # POST /presets
  def create
    @preset = Preset.new(preset_params)

    if @preset.save
      render json: @preset, status: :created, location: @preset
    else
      render json: @preset.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /presets/1
  def update
    if @preset.update(preset_params)
      render json: @preset
    else
      render json: @preset.errors, status: :unprocessable_entity
    end
  end

  # DELETE /presets/1
  def destroy
    @preset.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preset
      @preset = Preset.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def preset_params
      params.require(:preset).permit(:reverb, :delay, :tremolo, :waveshape, :envelope)
    end
end
