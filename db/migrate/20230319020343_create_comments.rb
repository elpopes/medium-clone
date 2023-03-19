class CreateComments < ActiveRecord::Migration[7.0]
    def change
      create_table :comments do |t|
        t.string :title
        t.text :body
        t.references :story, null: false, foreign_key: true
        t.references :comment_author, null: false, foreign_key: { to_table: :users }
  
        t.timestamps
      end
    end
  end
