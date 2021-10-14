class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :materials, null: false
      t.text :instruction, null: false
      t.string :image, default: 'https://user-images.githubusercontent.com/7420659/137364136-066feacf-250d-4fed-8287-11eba05deaf0.jpg'

      t.timestamps
    end
  end
end
