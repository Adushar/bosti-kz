class QuestionsController < ApplicationController
  def index
    @contacts = Contact.all
    contacts = Contact.all
    respond_to do |format|
      format.html
      format.json {
        render json: { }
      }
    end
  end
  def create
    @contact = Contact.create(contact_params)
    @contact.save
    redirect_to questions_path
  end
  private
  def contact_params
    params.require(:contact).permit(:name_of_questioner, :question)
  end
end
