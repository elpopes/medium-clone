ApplicationRecord.transaction do
    puts "Destroying tables..."
  
    # Unnecessary if using `rails db:seed:replant`

    ApplicationRecord.connection.reset_pk_sequence!("stories")
    ApplicationRecord.connection.reset_pk_sequence!("users")


    puts "Creating users..."
  
    User.create!(
      username: "frodo_baggins",
      password: "password",
      email: "frodo@middleearth.com",
      f_name: "Frodo",
      l_name: "Baggins",
      bio: "A hobbit and the ring-bearer in the quest to destroy the One Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "samwise_gamgee",
      password: "password",
      email: "samwise@middleearth.com",
      f_name: "Samwise",
      l_name: "Gamgee",
      bio: "A hobbit and Frodo's loyal gardener and friend.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "merry_brandybuck",
      password: "password",
      email: "merry@middleearth.com",
      f_name: "Meriadoc",
      l_name: "Brandybuck",
      bio: "A hobbit and member of the Fellowship of the Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "peregrin_took",
      password: "password",
      email: "peregrin@middleearth.com",
      f_name: "Peregrin",
      l_name: "Took",
      bio: "A hobbit and member of the Fellowship of the Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "legolas_greenleaf",
      password: "password",
      email: "legolas@middleearth.com",
      f_name: "Legolas",
      l_name: "Greenleaf",
      bio: "An elf and member of the Fellowship of the Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "gimli_son_of_gloin",
      password: "password",
      email: "gimli@middleearth.com",
      f_name: "Gimli",
      l_name: "Son of Gloin",
      bio: "A dwarf and member of the Fellowship of the Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )
    User.create!(
      username: "boromir_of_denethor",
      password: "password",
      email: "boromir@middleearth.com",
      f_name: "Boromir",
      l_name: "Son of Denethor",
      bio: "A man and member of the Fellowship of the Ring.",
      created_at: DateTime.now,
      updated_at: DateTime.now
    )

    User.create!(
        username: "arwen_evenstar",
        password: "password",
        email: "arwen@middleearth.com",
        f_name: "Arwen",
        l_name: "Evenstar",
        bio: "An elf and the lover of Aragorn.",
        created_at: DateTime.now,
        updated_at: DateTime.now
      )

      User.create!(
        username: "sauron_the_dark_lord",
        password: "password",
        email: "sauron@middleearth.com",
        f_name: "Sauron",
        l_name: "The Dark Lord",
        bio: "The primary antagonist of the Lord of the Rings and the master of the One Ring.",
        created_at: DateTime.now,
        updated_at: DateTime.now
    )


      User.create!(
        username: "gandalf_the_grey",
        password: "password",
        email: "gandalf@middleearth.com",
        f_name: "Gandalf",
        l_name: "The Grey",
        bio: "A wizard and mentor to Frodo and the Fellowship of the Ring.",
        created_at: DateTime.now,
        updated_at: DateTime.now
      )

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
      
  end

  Story.transaction do
    puts "Creating stories..."
    
    60.times do |i|
        author_id = (i + 9) % 10 + 1
        Story.create!(
          title: "Story #{i + 11} by User ##{author_id}",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna sit amet hendrerit congue, tellus mi tristique ante, a faucibus enim erat sit amet dui. Aliquam erat volutpat. Nam euismod ipsum vel ipsum rutrum, in tincidunt dui consectetur. Curabitur mollis, nisi vel aliquam tempor, nisl nisi pellentesque velit, vel tempor velit velit vel velit.",
          author_id: author_id,
          created_at: DateTime.now,
          updated_at: DateTime.now
        )
      end
  end
  
  puts "DONE!"





