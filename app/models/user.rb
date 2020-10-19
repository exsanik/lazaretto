class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  validates :mobile, presence: true, uniqueness: true
  validates :last_name, :first_name, :password_confirmation, presence: true
  validates :password, confirmation: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  # self.inheritance_column = :_type_disabled

  def email_required?
    false
  end

  def serializable
    case type
    when 'Doctor' then DoctorSerializer.new(self)
    when 'Patient' then PatientSerializer.new(self)
    else UserSerializer.new(self)
    end.serializable_hash
  end

  def role
    User.name
  end

  def email_changed?
    false
  end

  def will_save_change_to_email?
    false
  end

  def jwt_payload
    as_json
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  self.skip_session_storage = %i[http_auth params_auth]
end
