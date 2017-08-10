class MainController < ApplicationController
  def home
    @articles = Article.all
  end
  def service
  end
  def questions
  end
  def contact
  end
  def partners
  end
end
