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
    
    ApplicationRecord.connection.reset_pk_sequence!("avatars")
    ApplicationRecord.connection.reset_pk_sequence!("stories")
    ApplicationRecord.connection.reset_pk_sequence!("users")

    def create_user(username, email, f_name, l_name, password, avatar_url)
        user = User.create!(
          username: username,
          email: email,
          f_name: f_name,
          l_name: l_name,
          password: password,
          password_confirmation: password,
          created_at: DateTime.now,
          updated_at: DateTime.now
        )
      
        # Create avatar
        avatar = Avatar.create!(user: user)
        downloaded_avatar = open(avatar_url)
        avatar.photo.attach(io: downloaded_avatar, filename: "#{username.parameterize}-avatar.jpg", content_type: downloaded_avatar.content_type)
      
        user
    end

    def create_story(title, body, author, image_url)
        story = Story.create!(
          title: title,
          body: body,
          author: author,
          created_at: DateTime.now,
          updated_at: DateTime.now
        )
      
        # Attaching the image to the story
        downloaded_image = open(image_url)
        story.photo.attach(io: downloaded_image, filename: "#{title.parameterize}.jpg", content_type: downloaded_image.content_type)
      
        story
    end


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



    puts "Creating sample story..."

    author = User.find_by(username: "frodo_baggins")
    sample_story_image_url = "https://medium-earth-seeds.s3.amazonaws.com/stories/Hobbiton.webp"

    create_story(
        "A Journey to Hobbiton",
        "Once upon a time in the Shire, a young hobbit named Frodo Baggins embarked on an epic adventure...",
    author,
    sample_story_image_url
)

  
  end
  
  puts "DONE!"
  





