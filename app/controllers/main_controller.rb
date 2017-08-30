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
    @articles = Article.all
    @reviews = Review.all
    gon.articles = @articles
    gon.reviews = @reviews
  end
end
