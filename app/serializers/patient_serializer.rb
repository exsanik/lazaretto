class PatientSerializer < UserSerializer
  attributes :role

  has_many :doctors
  has_many :patient_doctors
end
