class Patient < User
  has_many :patient_doctors
  has_many :doctors, through: :patient_doctors

  def status
    name
  end
end
