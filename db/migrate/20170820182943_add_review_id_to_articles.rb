class AddReviewIdToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :review_id, :integer
  end
end
