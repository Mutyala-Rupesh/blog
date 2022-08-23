class ChangeCon < ActiveRecord::Migration[7.0]
  def change
    change_column :blogs , :blog_image ,:string
  end
end
