module Api
  module V1
    class DoctorsController < ApplicationController
      before_action :auth_user

      def index
        doctors = Doctor.all
        render json: DoctorSerializer.new(doctors).serializable_hash
      end

      def show
        doctor = Doctor.find(params[:id])
        render json: DoctorSerializer.new(doctor).serializable_hash
      end

      def update
        doctor = Doctor.find(params[:id])
        if doctor.update(doctor_params)
          render json: DoctorSerializer.new(doctor).serializable_hash
        else
          render json: doctor.errors, status: 422
        end
      end

      def create
        doctor = Doctor.new(doctor_params)
        if doctor.save
          render json: DoctorSerializer.new(doctor).serializable_hash
        else
          render json: doctor.errors, status: 422
        end
      end

      def destroy
        doctor = Doctor.find(params[:id])
        if doctor.destroy
          head :no_content
        else
          render json: doctor.errors, status: 400
        end
      end

      private

      def doctor_params
        params.required(:doctor).permit(%i[last_name first_name mobile password password_confirmation])
      end
    end
  end
end
