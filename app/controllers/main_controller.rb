class MainController < ApplicationController
  def home
    @articles = Article.all.order(:updated_at)
    articles = @articles.where(params[:id])
    gon.articles = Article.order(:updated_at)
    @reviews = Review.all.order(:updated_at)
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
    @ask = Ask.new(params[:ask])
    if @ask.save
      flash[:success] = "Post created!"

    end
  end
  def contact
  end
  def partners
  end
  def search
    @articles = Article.all.order(:updated_at)
    @reviews = Review.all.order(:updated_at)
    gon.articles = @articles
    gon.reviews = @reviews
  end
end
