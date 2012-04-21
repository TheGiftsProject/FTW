class Character < ActiveRecord::Migration
  def change
    add_column :characters, :project_id, :string
  end
end
