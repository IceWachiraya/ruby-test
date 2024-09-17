class RegistersController < ApplicationController
  before_action :set_register, only: [:show, :edit, :update, :destroy]

  # GET /registers
  def index
    @registers = Register.all
    @register = Register.new # Initialize @register for the modal form
  end

  # GET /registers/list
  def list
    @registers = Register.all
    @subjects = Register.pluck(:subject).uniq
    @register = Register.new # Initialize @register for the modal form

    if params[:search].present?
      search_term = params[:search].downcase
      @registers = @registers.where("LOWER(first_name) LIKE :term OR LOWER(last_name) LIKE :term", term: "%#{search_term}%")
    end

    if params[:subject].present?
      @registers = @registers.where(subject: params[:subject])
    end
  end

  # POST /registers
  def create
    @register = Register.new(register_params)
    if @register.save
     
      # Respond with JSON for AJAX
      render json: { 
        message: 'User was successfully created.',
        redirect_url: list_register_path
      }, status: :ok
     
    else
      # Respond with validation errors for AJAX
      render json: @register.errors.messages, status: :unprocessable_entity
    end
  end

  # GET /registers/:id/edit
  def edit
    @register = Register.find(params[:id])
  end

  # PATCH/PUT /registers/:id
  def update
    @register = Register.find(params[:id])
    if @register.update(register_params)
      redirect_to list_register_path
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  # DELETE /registers/:id
  def destroy
    @register = Register.find(params[:id])
    @register.destroy
    redirect_to list_register_path, notice: 'User was successfully deleted.'
  end

  private

  def set_register
    @register = Register.find(params[:id])
  end

  def register_params
    params.require(:register).permit(:first_name, :last_name, :birthday, :gender, :email, :phone, :subject)
  end
end
