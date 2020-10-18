class User < ApplicationRecord
  acts_as_token_authenticatable

  validates :mobile, presence: true, uniqueness: true
  validates :last_name, :first_name, :password_confirmation, presence: true
  validates :password, confirmation: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def email_required?
    false
  end

  def email_changed?
    false
  end

  def will_save_change_to_email?
    false
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
