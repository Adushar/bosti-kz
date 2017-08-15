class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    change_table :articles do |t|
      t.rename :topic, :html
      t.rename :img, :css
    end
  end
end
