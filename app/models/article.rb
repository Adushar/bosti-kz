class Article < ApplicationRecord
  validates :topic,  presence: true
  validates :img, presence: true
  validates :description, presence: true
end
