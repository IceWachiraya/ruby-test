class RegistersController < ApplicationController
  def index
    @registers = Register.all
  end
  def show 
    @register = Register.find(params[:id])
  end
  
  def new
    @register = Register.new
  end
  def create
    @register = Register.new(register_params)
    if @register.save
      redirect_to registers_path
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
      render 'new',status: :unprocessable_entity
    end
  end
  def destroy
    @register = Register.find(params[:id])
    @register.destroy

    redirect_to root_path, status: :see_other
  end

  private
  def register_params
    params.require(:register).permit(:first_name, :last_name, :birthday, :gender, :email, :phone, :subject)
  end
end
