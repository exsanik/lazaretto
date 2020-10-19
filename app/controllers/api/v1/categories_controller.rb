module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :auth_user

      def index
        categories = Category.all

        category_options = categories.map do |option|
          { label: option[:name], value: option[:id] }
        end

        render json: category_options
      end
    end
  end
end
