class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :authorID , null:false , foreign_key:true
      t.string :title , null:false
      t.text :blog_d , null:false
      t.blob :blog_image
      t.timestamps
    end
  end
end
