class CreatePresets < ActiveRecord::Migration[6.0]
  def change
    create_table :presets do |t|
      t.string :reverb
      t.string :delay
      t.string :tremolo
      t.string :waveshape
      t.string :envelope

      t.timestamps
    end
  end
end
