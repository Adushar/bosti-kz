class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :html
      t.text :css
      t.string :downloadLink

      t.timestamps
    end
  end
end
