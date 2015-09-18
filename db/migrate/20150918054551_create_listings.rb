class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.references :user, index: true
      t.string   :area
      t.string   :property_type
      t.integer  :bedrooms
      t.string   :furnishing_state
      t.integer  :bathrooms
      t.integer  :balconies
      t.integer  :build_up_area
      t.integer  :price
      t.integer  :deposit
      t.integer  :deposit
      t.timestamps null: false
    end
  end
end
