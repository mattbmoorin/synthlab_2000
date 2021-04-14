require 'test_helper'

class PresetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @preset = presets(:one)
  end

  test "should get index" do
    get presets_url, as: :json
    assert_response :success
  end

  test "should create preset" do
    assert_difference('Preset.count') do
      post presets_url, params: { preset: { delay: @preset.delay, envelope: @preset.envelope, reverb: @preset.reverb, tremolo: @preset.tremolo, waveshape: @preset.waveshape } }, as: :json
    end

    assert_response 201
  end

  test "should show preset" do
    get preset_url(@preset), as: :json
    assert_response :success
  end

  test "should update preset" do
    patch preset_url(@preset), params: { preset: { delay: @preset.delay, envelope: @preset.envelope, reverb: @preset.reverb, tremolo: @preset.tremolo, waveshape: @preset.waveshape } }, as: :json
    assert_response 200
  end

  test "should destroy preset" do
    assert_difference('Preset.count', -1) do
      delete preset_url(@preset), as: :json
    end

    assert_response 204
  end
end
