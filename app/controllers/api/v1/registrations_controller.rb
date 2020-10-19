module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def create
        build_resource(sign_up_params)

        resource.save

        if resource.errors.present?
          render json: { errors: resource.errors }, status: 422
        else
          render json: resource.serializable_hash
        end
      end

      private

      def sign_up_params
        params.require(:user).permit(:last_name, :first_name, :password, :type, :password_confirmation, :mobile)
      end
    end
  end
end
