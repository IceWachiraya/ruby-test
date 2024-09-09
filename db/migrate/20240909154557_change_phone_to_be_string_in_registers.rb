class ChangePhoneToBeStringInRegisters < ActiveRecord::Migration[7.1]
  def change
    change_column :registers, :phone, :string
  end
end
