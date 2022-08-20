class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users , id:false do |t|
      t.string :username , primary_key:true , unique:true
      t.string :first_name , null: false
      t.string :last_name 
      t.string :email , null:false , unique:true
      t.string :password , null:false  
      t.integer :age , null:false
      t.string :description
      t.blob :image
      t.timestamps
    end
  end
end
