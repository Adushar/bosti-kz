class AddRecomendToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :recomend, :string
  end
end
