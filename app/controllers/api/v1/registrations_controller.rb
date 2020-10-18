module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def create
        build_resource(sign_up_params)

        resource.save
        render_resource(resource)
      end

      def sign_up_params
        params.require(:user).permit(:last_name, :first_name, :type, :password, :password_confirmation, :mobile)
      end
    end
  end
end
