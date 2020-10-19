module Api
  module V1
    class AuthController < ApplicationController
      before_action :auth_user

      def index
        render json: current_user.serializable
      end
    end
  end
end
