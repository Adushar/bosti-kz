class MainController < ApplicationController
  def home
    @articles = Article.all
    articles = @articles.where(params[:id])
    respond_to do |format|
      format.html
      format.json {
        render json: articles
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
