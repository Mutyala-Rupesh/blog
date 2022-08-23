class AddColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :blogs, :short_des , :string
  end
end
