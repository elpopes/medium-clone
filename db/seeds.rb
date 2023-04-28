require 'open-uri'

ApplicationRecord.transaction do

    avatar_image_urls = [
        "https://medium-earth-seeds.s3.amazonaws.com/users/Aragorn.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Arwen.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Elrond.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Gimli.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Merry.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Murgash.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Pippin.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/Treebeard.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/bilbo.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/boromir.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/default.png",
        "https://medium-earth-seeds.s3.amazonaws.com/users/frodo.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/galadriel.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/gandalf.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/legolas.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/samwise.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/sauron.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/users/thror.webp"
    ]

    
    story_image_urls = [
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Azogkinghead.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Barad_dur.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Cirith_Ungol_SoW.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Dol_Guldur.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Ecthelion.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Frodo_Baggins_Gandalf_Tells.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Frodo_ambushed_by_Shelob.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Green_Dragon_Inn.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Hobbit-gold.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Hobbiton.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Khazad-dum.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Legolas_in_Moria.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Misty_Mountains.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Mordor.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Orodruin.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Rivendell.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Shelob.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/The_New_Ring.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Two_Trees.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/Valmar.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/elfland.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/feet.png",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/fishing.jpg",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/lastAlliance.webp",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/potion.png",
        "https://medium-earth-seeds.s3.amazonaws.com/stories/ravenhill.webp"
    ]
    
    
    
    puts "Destroying tables..."
  
    # Unnecessary if using `rails db:seed:replant`
    Avatar.delete_all
    Story.delete_all
    User.delete_all
    Comment.delete_all
    
    ApplicationRecord.connection.reset_pk_sequence!("avatars")
    ApplicationRecord.connection.reset_pk_sequence!("stories")
    ApplicationRecord.connection.reset_pk_sequence!("users")
    ApplicationRecord.connection.reset_pk_sequence!("comments")


    puts "Creating users..."

    users_data = [
        ["frodo_baggins", "password", "frodo@middleearth.com", "Frodo", "Baggins", "https://medium-earth-seeds.s3.amazonaws.com/users/frodo.webp"],
        ["samwise_gamgee", "password", "samwise@middleearth.com", "Samwise", "Gamgee", "https://medium-earth-seeds.s3.amazonaws.com/users/samwise.webp"],
        ["merry_brandybuck", "password", "merry@middleearth.com", "Meriadoc", "Brandybuck", "https://medium-earth-seeds.s3.amazonaws.com/users/Merry.webp"],
        ["peregrin_took", "password", "peregrin@middleearth.com", "Peregrin", "Took", "https://medium-earth-seeds.s3.amazonaws.com/users/Pippin.webp"],
        ["legolas_greenleaf", "password", "legolas@middleearth.com", "Legolas", "Greenleaf", "https://medium-earth-seeds.s3.amazonaws.com/users/legolas.webp"],
        ["gimli_son_of_gloin", "password", "gimli@middleearth.com", "Gimli", "Son of Gloin", "https://medium-earth-seeds.s3.amazonaws.com/users/Gimli.webp"],
        ["boromir_of_denethor", "password", "boromir@middleearth.com", "Boromir", "Son of Denethor", "https://medium-earth-seeds.s3.amazonaws.com/users/boromir.webp"],
        ["arwen_evenstar", "password", "arwen@middleearth.com", "Arwen", "Evenstar", "https://medium-earth-seeds.s3.amazonaws.com/users/Arwen.webp"],
        ["sauron_the_dark_lord", "password", "sauron@middleearth.com", "Sauron", "The Dark Lord", "https://medium-earth-seeds.s3.amazonaws.com/users/sauron.webp"],
        ["theGrey", "password", "gandalf@middleearth.com", "Gandalf", "The Grey", "https://medium-earth-seeds.s3.amazonaws.com/users/gandalf.webp"],
        ["aragorn", "password", "aragorn@middleearth.com", "Aragorn", "Elessar", "https://medium-earth-seeds.s3.amazonaws.com/users/Aragorn.webp"],
        ["elrond", "password", "elrond@middleearth.com", "Elrond", "Half-elven", "https://medium-earth-seeds.s3.amazonaws.com/users/Elrond.webp"],
        ["treebeard", "password", "treebeard@middleearth.com", "Treebeard", "Fangorn", "https://medium-earth-seeds.s3.amazonaws.com/users/Treebeard.webp"],
        ["bilbo_baggins", "password", "bilbo@middleearth.com", "Bilbo", "Baggins", "https://medium-earth-seeds.s3.amazonaws.com/users/bilbo.webp"],
        ["galadriel", "password", "galadriel@middleearth.com", "Galadriel", "Lady of Light", "https://medium-earth-seeds.s3.amazonaws.com/users/galadriel.webp"],
        ["murgash", "password", "murgash@middleearth.com", "Murgash", "Orc Chieftain", "https://medium-earth-seeds.s3.amazonaws.com/users/Murgash.webp"],
        ["thror", "password", "thror@middleearth.com", "Thror", "Dwarf King", "https://medium-earth-seeds.s3.amazonaws.com/users/thror.webp"]
    ]

    users_data.each do |username, password, email, f_name, l_name, photo_url|
        user = User.create!(
            username: username,
            password: password,
            email: email,
            f_name: f_name,
            l_name: l_name
        )

        avatar = Avatar.new(user: user)
        file = URI.open(photo_url)
        avatar.photo.attach(io: file, filename: "#{username}_avatar.jpg", content_type: 'image/jpeg')
        avatar.save!
    end



    puts "Creating stories..."

    story_data = [
        {
            title: "Story 1: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "frodo_baggins",
            image_url: story_image_urls[0]
        },
        {
            title: "Story 2: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "theGrey",
            image_url: story_image_urls[1]
        },
        {
            title: "Story 3: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "aragorn",
            image_url: story_image_urls[2]
        },
        {
            title: "Story 4: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "legolas_greenleaf",
            image_url: story_image_urls[3]
        },
        {
            title: "Story 5: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "gimli_son_of_gloin",
            image_url: story_image_urls[4]
        },
        {
            title: "Story 6: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "boromir_of_denethor",
            image_url: story_image_urls[5]
        },
        {
            title: "Story 7: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "samwise_gamgee",
            image_url: story_image_urls[6]
        },
        {
            title: "Story 8: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "merry_brandybuck",
            image_url: story_image_urls[7]
        },
        {
            title: "Story 9: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "peregrin_took",
            image_url: story_image_urls[8]
        },
        {
            title: "Story 10: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "elrond",
            image_url: story_image_urls[9]
        },
        {
            title: "Story 11: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "arwen_evenstar",
            image_url: story_image_urls[10]
        },
        {
            title: "Story 12: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "galadriel",
            image_url: story_image_urls[11]
        },
        {
            title: "Story 13: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "sauron_the_dark_lord",
            image_url: story_image_urls[12]
        },
        {
            title: "Story 14: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "bilbo_baggins",
            image_url: story_image_urls[13]
        },
        {
            title: "Story 15: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "sauron_the_dark_lord",
            image_url: story_image_urls[14]
        },
        {
            title: "Story 16: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "treebeard",
            image_url: story_image_urls[15]
        },
        {
            title: "Story 17: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "thror",
            image_url: story_image_urls[16]
        },
        {
            title: "Story 18: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "murgash",
            image_url: story_image_urls[17]
        },
        {
            title: "Story 19: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "frodo_baggins",
            image_url: story_image_urls[18]
        },
        {
            title: "Story 20: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "theGrey",
            image_url: story_image_urls[19]
        },
        {
            title: "Story 21: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "aragorn",
            image_url: story_image_urls[20]
        },
        {
            title: "Story 22: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "samwise_gamgee",
            image_url: story_image_urls[21]
        },
        {
            title: "Story 23: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "merry_brandybuck",
            image_url: story_image_urls[22]
        },
        {
            title: "Story 24: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "peregrin_took",
            image_url: story_image_urls[23]
        },
        {
            title: "Story 25: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "legolas_greenleaf",
            image_url: story_image_urls[24]
        },
        {
            title: "Story 26: Placeholder Title",
            body: "Words: 1 2 3 4 5",
            author_username: "gimli_son_of_gloin",
            image_url: story_image_urls[25]
        }
    ]

    story_data.each do |story_info|
        author = User.find_by(username: story_info[:author_username])
  
        if author
            story = Story.create!(
                title: story_info[:title],
                body: story_info[:body],
                author: author,
                created_at: DateTime.now,
                updated_at: DateTime.now
            )
  
            downloaded_image = URI.open(story_info[:image_url])
            story.photo.attach(io: downloaded_image, filename: "#{story.title.parameterize}.jpg", content_type: downloaded_image.content_type)
        else
            puts "Author not found: #{story_info[:author_username]}"
        end
    end
    
    puts "Finished Seeding!"
    
end





