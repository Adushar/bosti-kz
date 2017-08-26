class CreateAsks < ActiveRecord::Migration[5.1]
  def change
    create_table :asks do |t|
      t.string :full_name
      t.string :email
      t.string :processed
      t.text :question

      t.timestamps
    end
  end
end
