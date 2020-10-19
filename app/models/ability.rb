# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    if user.role === 'Admin'
      can :manage, :all
    elsif user.role === 'Doctor'
      can :manage, PatientDoctor do |pd|
        pd[:doctor_id] == user[:id]
      end
      can :read, :all
    elsif user.role === 'Patient'
      can :manage, PatientDoctor do |pd|
        pd[:patient_id] == user[:id]
      end
      can :read, :all
    end
  end
end
