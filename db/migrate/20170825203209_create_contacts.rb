class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name_of_questioner
      t.text :question
      t.string :name_of_answerer
      t.text :answer

      t.timestamps
    end
  end
end
