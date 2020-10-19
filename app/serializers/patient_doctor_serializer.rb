class PatientDoctorSerializer
  include JSONAPI::Serializer

  attributes :patient_id, :doctor_id, :note
end
