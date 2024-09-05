class RegisterController < ApplicationController
  def index
    @register = Register.all
  end
  def show 
    @register = Register.find(params[:id])
  end
end
