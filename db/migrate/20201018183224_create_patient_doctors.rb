class CreatePatientDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :patient_doctors do |t|
      t.integer :patient_id
      t.integer :doctor_id
      t.text :note

      t.timestamps
    end
  end
end
