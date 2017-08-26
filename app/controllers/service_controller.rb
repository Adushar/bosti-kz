class ServiceController < ApplicationController
  def index
  end
  def create
    @ask = Ask.create(ask_params)
    @ask.save
    redirect_to service_index_path
  end
  private
  def ask_params
    params.require(:ask).permit(:full_name, :email, :question)
  end
end
