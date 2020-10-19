module Api
  module V1
    module Patients
      class DoctorsController < ApplicationController
        def show
          patient = Patient.find(params[:patient_id])

          if patient
            render json: PatientSerializer.new(patient, { include: %i[doctors patient_doctors] }).serializable_hash
          else
            render status: 404
          end
        end
      end
    end
  end
end
