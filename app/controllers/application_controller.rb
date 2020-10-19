class ApplicationController < ActionController::Base
  skip_forgery_protection

  def auth_user
    User.inheritance_column = :_type_disabled
    authenticate_user!
    User.inheritance_column = :type
  end
end
