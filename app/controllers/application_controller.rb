class ApplicationController < ActionController::Base
  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      render json: { errors: resource.errors }, status: 422
    end
  end
end
