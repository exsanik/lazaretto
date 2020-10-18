module Api
  module V1
    class DoctorsController < ApplicationController
      acts_as_token_authentication_handler_for User

      def index
        doctors = Doctor.all
        render json: doctors
      end
    end
  end
end
