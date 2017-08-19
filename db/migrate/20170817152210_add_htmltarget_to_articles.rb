class AddHtmltargetToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :htmltarget, :string
  end
end
