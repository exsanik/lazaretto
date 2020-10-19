module Api
  module V1
    class SessionsController < Devise::SessionsController
      respond_to :json

      def create
        resource = warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        respond_with resource
      end

      private

      def respond_with(resource, _opts = {})
        render json: resource.serializable
      end

      def respond_to_on_destroy
        head :no_content
      end
    end
  end
end
