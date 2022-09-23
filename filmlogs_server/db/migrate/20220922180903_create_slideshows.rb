class CreateSlideshows < ActiveRecord::Migration[7.0]
  def change
    create_table :slideshows do |t|
      t.string :city
      t.string :country
      t.string :date
      t.text :note
      t.boolean :isReleased
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
