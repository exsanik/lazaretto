class Doctor < User
  has_many :patients, through: :patient_doctors
end
