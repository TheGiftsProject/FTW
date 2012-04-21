class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.string :token
      t.string :klass
      t.integer :level
      t.integer :exp
      t.string :gender
      t.string :avatar
      t.string :email
      t.integer :skill_ruby
      t.integer :skill_js
      t.integer :skill_web

      t.timestamps
    end
  end
end
