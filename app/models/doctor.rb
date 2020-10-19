class Doctor < User
  has_many :patient_doctors
  has_many :patients, through: :patient_doctors

  def role
    Doctor.name
  end

  def available_for_record
    patient_doctors.select { |pd| pd[:note]&.empty? || pd[:note]&.nil? }.length < 10
  end
end
