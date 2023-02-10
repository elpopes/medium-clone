# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# File: db/seeds/story_1.rb

ApplicationRecord.transaction do
    puts "Destroying tables..."
  
    # Unnecessary if using `rails db:seed:replant`
    Story.destroy_all
    ApplicationRecord.connection.reset_pk_sequence!("stories")
    Story.create!(
        title: "An Unexpected Journey",
        body: "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
        author_id: 10,
        created_at: DateTime.now,
        updated_at: DateTime.now
      )
      
      # File: db/seeds/story_2.rb
      
      Story.create!(
        title: "The Desolation of Smaug",
        body: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo infiltrates the Lonely Mountain in disguise and discovers a mysterious item known as the One Ring.",
        author_id: 10,
        created_at: DateTime.now,
        updated_at: DateTime.now
      )
      
      # File: db/seeds/story_3.rb
      
      Story.create!(
        title: "The Battle of the Five Armies",
        body: "As the dwarves of Erebor reclaim their homeland, they spark a battle when the dragon Smaug awakens and begins attacking Lake-town. Five armies then converge for a battle that will determine the future of all in Middle-earth.",
        author_id: 10,
        created_at: DateTime.now,
        updated_at: DateTime.now
      )
      
      # File: db/seeds/story_4.rb
      
      Story.create!(
        title: "Riddles in the Dark",
        body: "Bilbo Baggins meets Gollum in the depths of the Misty Mountains and must use his wit to solve riddles and escape Gollum's lair while in possession of the One Ring.",
        author_id: 10,
        created_at: DateTime.now,
        updated_at: DateTime.now
      )
      
      # File: db/seeds/story_5.rb
      
      Story.create!(
        title: "A Long-expected Party",
        body: "Bilbo Baggins, a hobbit in the Shire, throws a party to mark his eleventy-first birthday and the arrival of his old friend Gandalf the Grey, who brings news of a great adventure.",
        author_id: 10,
        created_at: DateTime.now,
        updated_at: DateTime.now
      )
      
   puts "DONE!"
  end



