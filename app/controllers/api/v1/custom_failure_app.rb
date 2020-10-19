module Api
  module V1
    class CustomFailureApp < Devise::FailureApp
      def respond
        json_error_response
      end

      def json_error_response
        self.status = 401
        self.content_type = 'application/json'
        self.response_body = { base: 'Your mobile or password is incorrect.' }.to_json
      end
    end
  end
end
