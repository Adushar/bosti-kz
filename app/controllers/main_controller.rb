class MainController < ApplicationController
  def home
    @articles = Article.all
    articles = @articles.where(params[:id])
    @reviews = Review.all
    respond_to do |format|
      format.html
      format.json {
        render json: {all_data: {articles: articles, reviews: @reviews}}
      }
    end
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
