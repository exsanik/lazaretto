class Patient < User
  has_many :doctors, through: :patient_doctors
end
