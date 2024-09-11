class RegistersController < ApplicationController
  def index
    @registers = Register.all
  end
  def show 
    @register = Register.find(params[:id])
  end
  def list
    @subjects = Register.pluck(:subject).uniq
    if params[:subject].present?
      @registers = Register.where(subject: params[:subject])
    else
      @registers = Register.all
    end
  end
  def new
    @register = Register.new
  end
  def create
    @register = Register.new(register_params)
    if @register.save
      redirect_to list_register_path
    else
        render 'new',status: :unprocessable_entity
    end
  end

  def edit
    @register = Register.find(params[:id])
  end

  def update
    @register = Register.find(params[:id])
    if @register.update(register_params)
      redirect_to @register
    else
      render 'edit',status: :unprocessable_entity
    end
  end
  # def destroy
  #   @register = Register.find(params[:id])
  #   @register.destroy

  #   redirect_to list_register_path, status: :see_other
  # end
  def destroy
    @register = Register.find(params[:id])
    @register.destroy
    redirect_to list_register_path, notice: 'User was successfully deleted.'
  end
  

  private
  def register_params
    params.require(:register).permit(:first_name, :last_name, :birthday, :gender, :email, :phone, :subject)
  end
end
