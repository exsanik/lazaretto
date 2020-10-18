class PatientDoctor < ApplicationRecord
  belongs_to :doctors
  belongs_to :patients
end
