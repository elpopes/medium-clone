ApplicationRecord.transaction do
    puts "Destroying tables..."
  
    # Unnecessary if using `rails db:seed:replant`
    User.delete_all
    Story.delete_all

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
      
  end
  
  puts "DONE!"





