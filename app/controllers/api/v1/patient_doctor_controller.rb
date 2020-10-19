module Api
  module V1
    class PatientDoctorController < ApplicationController
      before_action :auth_user

      def create
        patient_doctor = PatientDoctor.new(patient_doctor_params)

        if patient_doctor.save
          render json: PatientDoctorSerializer.new(patient_doctor)
        else
          render json: patient_doctor.errors, status: 422
        end
      end

      def update
        patient_doctor = PatientDoctor.find(params[:id])

        if patient_doctor.update(patient_doctor_params)
          render json: PatientDoctorSerializer.new(patient_doctor)
        else
          render json: patient_doctor.errors, status: 422
        end
      end

      def destroy
        patient_doctor = PatientDoctor.find(params[:id])

        if patient_doctor.destroy
          head :no_content
        else
          render json: patient_doctor.errors, status: 400
        end
      end

      private

      def patient_doctor_params
        params.require(:patient_doctor).permit(%i[patient_id doctor_id note])
      end
    end
  end
end
