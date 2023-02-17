class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :author, null: false, foreign_key: { to_table: :users}
      t.timestamps
    end
    add_index :stories, :title
  end
end
