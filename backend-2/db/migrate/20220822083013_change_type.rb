class ChangeType < ActiveRecord::Migration[7.0]
  def change
    change_column :users , :image ,:string
  end
end
