# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create([{ name: 'Therapist' }, { name: 'Surgeon' }, { name: 'Traumatologist' }, { name: 'Dermatologist' }])
Admin.create(mobile: '+380987654321', last_name: 'Admin', first_name: 'Admin', password: 'password', password_confirmation: 'password')
Doctor.create([
                { mobile: '+380999999999', last_name: 'Doctor1', first_name: 'Doc', password: 'password', password_confirmation: 'password', category_id: 1 },
                { mobile: '+380999999998', last_name: 'Doctor2', first_name: 'Doc', password: 'password', password_confirmation: 'password', category_id: 3 }
              ])
Patient.create([
                 { mobile: '+380999999997', last_name: 'Patient1', first_name: 'Pat', password: 'password', password_confirmation: 'password' },
                 { mobile: '+380999999996', last_name: 'Patient2', first_name: 'Pat', password: 'password', password_confirmation: 'password' },
                 { mobile: '+380999999995', last_name: 'Patient3', first_name: 'Pat', password: 'password', password_confirmation: 'password' },
                 { mobile: '+380999999994', last_name: 'Patient4', first_name: 'Pat', password: 'password', password_confirmation: 'password' },
                 { mobile: '+380999999993', last_name: 'Patient5', first_name: 'Pat', password: 'password', password_confirmation: 'password' }
               ])
