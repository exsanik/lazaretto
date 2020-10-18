module Api
  module V1
    class DoctorsController < ApplicationController
      before_action :authenticate_user!

      def index
        doctors = Doctor.all
        render json: doctors
      end
    end
  end
end
