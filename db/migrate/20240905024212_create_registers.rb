class CreateRegisters < ActiveRecord::Migration[7.1]
  def change
    create_table :registers do |t|
      t.string :first_name
      t.string :last_name
      t.date :birthday
      t.string :gender
      t.string :email
      t.integer :phone
      t.string :subject

      t.timestamps
    end
  end
end
