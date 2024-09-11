class Register < ApplicationRecord
  #Check FirstName and LastName
  validates :first_name, presence: { message: "กรุณากรอกชื่อ" }
  validates :last_name, presence: { message: "กรุณากรอกนามสกุล" }
  validates :birthday, presence:{message:"กรุณากรอกวันเกิด"}
  validates :gender, presence:{message:"กรุณาเลือกเพศ"}
  validates :email,presence:{message:"กรุณากรอกอีเมล"}
  validates :subject, presence: { message: "กรุณาเลือกวิชา" }

  # ตรวจสอบหมายเลขโทรศัพท์
  validate :phone_validation

  def phone_validation
    if phone.blank?
      errors.add(:phone, "กรุณากรอกหมายเลขโทรศัพท์")
    # ตรวจสอบรูปแบบเบอร์โทรให้ตรงตาม 123-456-7890
    elsif phone !~ /\A\d{3}-\d{3}-\d{4}\z/
      errors.add(:phone, "หมายเลขโทรศัพท์ต้องอยู่ในรูปแบบ xxx-xxx-xxxx")
    elsif phone.length < 12
      errors.add(:phone, "หมายเลขโทรศัพท์ต้องมีอย่างน้อย 10 หลัก (รวมขีดกลาง)")
    end
  end
 
end
