class Doctor < User
  has_many :patient_doctors
  has_many :patients, through: :patient_doctors

  def status
    name
  end

  def available_for_record; end
end
