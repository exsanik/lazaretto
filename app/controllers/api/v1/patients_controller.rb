module Api
  module V1
    class PatientsController < ApplicationController
      before_action :auth_user

      def index
        patients = Patient.all
        render json: PatientSerializer.new(patients).serializable_hash
      end

      def show
        patient = Patient.find(params[:id])
        render json: PatientSerializer.new(patient).serializable_hash
      end

      def update
        patient = Patient.find(params[:id])
        if patient.update(patient_params)
          render json: PatientSerializer.new(patient).serializable_hash
        else
          render json: patient.errors, status: 422
        end
      end

      def create
        patient = patient.new(patient_params)
        if patient.save
          render json: PatientSerializer.new(patient).serializable_hash
        else
          render json: patient.errors, status: 422
        end
      end

      def destroy
        patient = Patient.find(params[:id])
        if patient.destroy
          head :no_content
        else
          render json: patient.errors, status: 400
        end
      end

      private

      def patient_params
        params.required(:patient).permit(%i[last_name first_name mobile password password_confirmation])
      end
    end
  end
end
