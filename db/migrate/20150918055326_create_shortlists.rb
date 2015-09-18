class CreateShortlists < ActiveRecord::Migration
  def change
    create_table :shortlists do |t|
      t.references :user, index: true
      t.references :listing, index: true

      t.timestamps null: false
    end
  end
end
