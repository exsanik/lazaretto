class Admin < User
  def role
    Admin.name
  end
end
