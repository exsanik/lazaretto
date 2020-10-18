class UserSerializer
  include JSONAPI::Serializer
  attributes :last_name, :first_name, :mobile, :full_name
end
