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
    Comment.delete_all
    Avatar.delete_all
    Story.delete_all
    User.delete_all
    
    ApplicationRecord.connection.reset_pk_sequence!("comments")
    ApplicationRecord.connection.reset_pk_sequence!("avatars")
    ApplicationRecord.connection.reset_pk_sequence!("stories")
    ApplicationRecord.connection.reset_pk_sequence!("users")


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
            title: "Little People, Big Bullies",
            body: 
            "As an orc, I have seen many different types of bullies, but the ones that stand out the most are the dwarves. They have a reputation for their love of gold and treasure, which has led them to raid our villages and kill innocent creatures in pursuit of their greed. They have no regard for the lives of others, as long as they can get what they want.

            Dwarves are also known for their stubbornness and arrogance. They believe that their way is the only way and will go to great lengths to prove it. I have seen them refuse to negotiate with us for peaceful solutions to disputes, instead choosing to bring in their armies and attack us, leaving us with no other option but to defend ourselves.
            
            Moreover, dwarves are incredibly violent and aggressive. They have a tendency to pick fights over small matters and will use their physical strength to get what they want. They have no respect for the rights or freedoms of others and seem to enjoy fighting.
            
            As an orc, I have learned to be wary of dwarves and their dangerous tendencies. They are greedy, selfish, and violent creatures who only care about themselves. It is important to defend oneself against their aggression and stand up against their bullying tactics.",
            author_username: "murgash",
            image_url: story_image_urls[0]
        },
        {
            title: "Heating Bills: The Real Enemy",
            body: 
            "As a Dark Lord, I have to constantly worry about the upkeep of my evil fortress. It's not just about maintaining the walls and defenses, but also about ensuring that everything runs smoothly and efficiently. Here are some of the challenges I face in keeping my fortress in top shape.

            Firstly, the constant need for repairs and maintenance can be overwhelming. With all the battles and sieges that take place, the walls and fortifications are always being damaged. It takes a lot of resources and manpower to keep them in good condition, and it can be difficult to find skilled workers who are willing to work in such a dangerous environment.

            Secondly, the logistics of supplying the fortress with food and other resources can be a nightmare. It takes a lot of planning and organization to ensure that there's enough food, water, and other supplies to keep the armies and workers fed and hydrated. Plus, transporting these supplies through hostile territory can be risky and time-consuming.

            Thirdly, the challenge of maintaining morale among the troops and workers can be difficult. They are constantly living in fear and under stressful conditions, and it's important to provide them with some degree of comfort and entertainment. But providing these amenities can be expensive and time-consuming, and it can be difficult to balance the needs of the troops with the needs of the fortress.

            Fourthly, the heating bills can be a real headache. It takes a lot of energy to keep the fortress warm during the winter months, and the cost of fuel can be exorbitant. It's important to find ways to reduce energy consumption and explore alternative energy sources, but these efforts can be expensive and time-consuming.

            Finally, the biggest challenge of all is the constant threat of attack. The fortress is always under siege by enemies who are looking to destroy it and take over the territory. It takes a lot of resources and manpower to defend against these attacks, and it can be difficult to predict when and where the attacks will come from.

            In conclusion, maintaining an evil fortress is not for the faint of heart. It requires a lot of resources, planning, and hard work to keep everything running smoothly. But for a Dark Lord like myself, it's a small price to pay for the power and control that comes with it.",

            author_username: "sauron_the_dark_lord",
            image_url: story_image_urls[1]
        },
        {
            title: "Want to Get Fit? Step It Up!",
            body: 
            "If you're looking for a simple and effective way to get fit, look no further than your stairs! Climbing stairs is a great way to get your heart rate up and build strength in your legs. Here are some examples of great stairs to climb:
          
            One of the best staircases to climb is the infamous Cirith Ungol in Mordor. This staircase was built by the Dark Lord Sauron himself and is guarded by his most fearsome minions. Climbing it is a true test of one's strength and endurance.
            
            Another great set of stairs to climb is the Tower of Orthanc in Isengard. This tower was once the stronghold of the wizard Saruman, and the stairs leading to the top offer a challenging workout. Plus, the view from the top is breathtaking!
            
            For those who prefer a more natural setting, the Misty Mountains offer a wide variety of staircases to climb. From the winding stairs of Khazad-dûm to the steep staircases of Caradhras, there's no shortage of challenging climbs to choose from.
            
            Even the Shire, with its rolling hills and gentle landscapes, offers some great stair-climbing opportunities. The stairs leading up to Bag End, the home of Bilbo and Frodo Baggins, are a classic example. And the stairs leading up to the top of the Hill in Hobbiton offer a scenic workout with a stunning view of the surrounding countryside.
            
            In conclusion, climbing stairs is a simple and effective way to get fit. And with so many great staircases to choose from, there's no excuse not to give it a try! So, put on your walking shoes, grab a water bottle, and start climbing those stairs!",
            author_username: "samwise_gamgee",
            image_url: story_image_urls[2]
        },
        {
            title: "Not Really My Thing",
            body: 
            "I've seen my fair share of underground fortresses, but Dol Guldur is one that I just can't get into. I mean, sure, it's a massive fortress with all the bells and whistles, but there are a few things that just don't sit right with me.
          
            Firstly, the decor is just plain gloomy. I mean, sure, it's a fortress of evil, but does everything have to be so dark and depressing? I much prefer the colorful and vibrant decor of the Lonely Mountain.
            
            Secondly, the food is just terrible. I mean, I know that's not the main reason to go to a fortress of evil, but come on! I had a meal there once and I swear it was just a pile of raw meat.
            
            Thirdly, the music is just dreadful. It's all moaning and groaning and chanting. I much prefer the lively tunes played by the bards in the halls of Erebor.
            
            But the real reason why Dol Guldur isn't my thing is the complete lack of hospitality. I mean, sure, it's a fortress of evil and all, but a little bit of kindness goes a long way. When I visited, no one offered me a drink or even a place to sit. They just glared at me with their beady little eyes.
            
            In conclusion, while Dol Guldur may be an impressive fortress, it's just not my thing. The gloomy decor, terrible food, dreadful music, and lack of hospitality just don't make it a place where I want to spend my time.",
            author_username: "thror",
            image_url: story_image_urls[3]
        },
        {
            title: "Flags and Crenellations",
            body: 
            "As an elf with an appreciation for architecture, I have always been fascinated by the design of Minas Tirith. The white stone walls, the winding staircases, the flags and crenellations - every detail is a testament to the skill and ingenuity of its builders.
          
            The first thing that strikes me about Minas Tirith is its impressive size. It towers over the surrounding landscape, with seven levels of walls and fortifications. Each level is wider than the one below it, creating a tiered effect that is both aesthetically pleasing and strategic in terms of defense.
            
            But what really sets Minas Tirith apart is its decorative elements. The flags and banners that adorn the walls, the intricate carvings and sculptures, and the crenellations that line the battlements - all of these details are carefully crafted to enhance the beauty and functionality of the fortress.
            
            The crenellations, for example, are not just decorative. They serve a practical purpose in warfare, providing cover for archers while still allowing them to fire upon the enemy. And the flags and banners, while adding color and flair to the fortress, also serve to identify the different houses and factions within Minas Tirith.
            
            Another impressive feature of Minas Tirith is its use of natural elements in its design. The walls and towers are built into the mountainside, blending seamlessly with the surrounding landscape. The use of white stone, quarried from the nearby mountains, not only gives the fortress its distinctive look, but also reflects the light in a way that makes it visible from great distances.
            
            In conclusion, Minas Tirith is a true masterpiece of architecture, combining functionality with beauty and incorporating natural elements into its design. It is a testament to the skill and ingenuity of its builders, and a shining example of what can be achieved when form and function are combined in perfect harmony.",
            author_username: "elrond",
            image_url: story_image_urls[4]
        },
        {
            title: "The Trouble with Men",
            body: 
            "I have always been fascinated by the larger races of Middle-earth, particularly men. They are such complex creatures, with their endless greed and desire for power. But as much as I admire them, there's no denying that they have their fair share of problems - especially when it comes to their size.
          
            The first thing that strikes me about men is their sheer size. They are so big and tall, with limbs like tree trunks and hands the size of my head. And with their size comes a whole host of problems. For one thing, they break furniture. I can't tell you how many times I've seen a man sit down on a chair, only to have it collapse under his weight.
            
            And then there's the issue of portion sizes. Men eat so much food! It's like they have a never-ending appetite. I've seen men eat entire loaves of bread in one sitting, or devour whole chickens in a single meal. It's truly impressive, but also a bit terrifying.
            
            But the real trouble with men is their greed and desire for power. They will stop at nothing to get what they want, even if it means hurting others in the process. It's a trait that has caused a great deal of suffering throughout Middle-earth, and one that I can never quite understand.
            
            In conclusion, while men may be fascinating creatures, their size and insatiable appetites, coupled with their greed and desire for power, make them a bit of a problem. But despite all this, I can't help but admire them - even if I do have to watch them carefully around my furniture.",
            author_username: "frodo_baggins",
            image_url: story_image_urls[5]
        },
        {
            title: "Dealing with Pesky Pests",
            body: 
            "I have had my fair share of encounters with pesky pests. From mice in the pantry to moths in the wardrobe, these little critters can wreak havoc on a hobbit's home. But fear not, my dear readers, for I have some tips and tricks for dealing with even the peskiest of pests.

            Firstly, for mice and other small rodents, I recommend setting out traps or investing in a good cat. Cats are natural hunters and will take care of any rodents in no time.

            For insects like flies and mosquitoes, try using a mesh screen on your windows and doors. This will allow fresh air to circulate while keeping the bugs out.

            And for the larger pests, like giant spiders, well... that's a bit trickier. My advice is to simply avoid them at all costs. If you do happen to find yourself face-to-face with a giant spider, try screaming and running away as fast as you can. It may not be the most dignified approach, but it's certainly effective.

            In conclusion, dealing with pests can be a challenge, but with the right tools and a little bit of creativity, you can keep your home pest-free and peaceful.",
            author_username: "bilbo_baggins",
            image_url: story_image_urls[6]
        },

        {
            title: "Ales of the Green Dragon",
            body: 
            "As a hobbit with a love for good food and drink, I have spent many a night sampling the ales and meads at the Green Dragon. And let me tell you, my dear readers, there are some truly excellent brews to be had.

            Firstly, there's the classic Hobbiton Ale - a smooth, nutty brew that pairs perfectly with a hearty meal.

            Then there's the Dragon's Breath Mead - a sweet, honeyed mead that packs quite a punch.

            And for those looking for something a bit more adventurous, there's the Buckleberry Beer - a tart and refreshing beer made from the finest berries in the Shire.

            But my personal favorite has to be the Green Dragon's own special brew - a secret recipe that combines the best elements of all the other ales and meads. It's a bit strong, but oh-so-delicious.

            In conclusion, if you're looking for a good drink in the Shire, you can't go wrong with the Green Dragon. With a wide variety of ales and meads to choose from, there's something for everyone.",
            author_username: "merry_brandybuck",
            image_url: story_image_urls[7]
        },
        {
            title: "Me Loves Gold",
            body: 
            "It's no secret that I, Thror, King Under the Mountain, love gold more than anything else in Middle-earth. But it's not just the shine and glitter that gets me going. It's the way that gold represents power and prestige, and the way it can be used to make great works of art and architecture.

            You see, my dear readers, I don't just hoard gold for the sake of hoarding. I use it to create great works of beauty, like the halls of Erebor and the treasure troves of the Lonely Mountain.

            Of course, not everyone understands my love for gold. Some call me greedy, and others accuse me of hoarding wealth that should be shared with the people. But to them I say: you simply don't understand the true value of gold.

            In conclusion, my love for gold is not just about material wealth, but about the power and creativity that it represents. So the next time you see a glittering pile of gold coins, think of me, Thror, and the great works that can be achieved with such a treasure.",
            author_username: "thror",
            image_url: story_image_urls[8]
        },

        {
            title: "The Shire: Middle-earth's Silicon Valley",
            body: 
            "When you think of the Shire, you probably picture quaint hobbit holes and rolling green hills. But what you may not know is that the Shire is quickly becoming the go-to destination for tech companies and startups in Middle-earth.

            With its peaceful countryside and friendly inhabitants, the Shire offers the perfect environment for creative thinking and innovation. Plus, the hobbits have a natural talent for inventing and tinkering, making them valuable assets to any tech company.

            But the real secret to the Shire's success lies in its focus on sustainability and eco-friendliness. Many hobbits are passionate about protecting the environment and reducing their carbon footprint, and this mindset has led to some truly groundbreaking advancements in renewable energy and sustainable agriculture.

            So if you're a tech entrepreneur looking for the next big thing, look no further than the Shire. With its unique blend of creativity, innovation, and sustainability, it's the perfect place to start your next venture.

            In conclusion, the Shire may seem like an unlikely location for a tech hub, but don't be fooled by its pastoral exterior. With its focus on sustainability and innovation, the Shire is quickly becoming the Silicon Valley of Middle-earth.",
            author_username: "peregrin_took",
            image_url: story_image_urls[9]
        },

        {
            title: "There Goes the Neighborhood",
            body: 
            "As a proud dwarf of Khazad-dum, I have seen firsthand the devastating effects that orcs can have on a neighborhood. They bring down property values, they make a mess of everything, and worst of all, they don't even have the decency to clean up after themselves.
          
            Take Khazad-dum for example. It used to be a thriving community, full of hardworking dwarves and beautiful architecture. But then the orcs moved in, and everything went to hell. They tore down buildings, defaced artwork, and left trash and debris everywhere.
            
            And it's not just Khazad-dum. Orcs have a way of ruining everything they touch. From the forests of Lothlorien to the mines of Moria, their presence is always felt in the worst possible way.
            
            Now, some might call me racist for speaking out against orcs like this. But I assure you, it's not about race - it's about decency and respect. If the orcs would just learn to clean up after themselves and stop tearing everything apart, maybe we could all get along.
            
            In conclusion, orcs may have their place in Middle-earth, but it's certainly not in my neighborhood.",
            author_username: "gimli_son_of_gloin",
            image_url: story_image_urls[10]
          },
          
          {
            title: "Ode to me Bow'd, and yon arrows, too",
            body: 
            "Oh me bow'd, how sweet thee be,
            An extension of my arm, thee set me free.
            
            From Rivendell to Mirkwood, I draw me bow,
            With arrows swift and true, my aim doth glow.
            
            From trolls to orcs, no foe too great,
            Me bow'd and I, we seal their fate.
            
            A weapon fair, yet deadly too,
            Me bow'd, I owe me victories to you.
            
            So here's to me bow'd, my trusted friend,
            Together we shall fight until the end.",

            author_username: "legolas_greenleaf",
            image_url: story_image_urls[11]
          },

          {
            title: "Trees Should Be Free To Marry Who They Want",
            body: 
            "Why can't trees get married? Is it because we don't have opposable thumbs to exchange rings? Or maybe it's because we don't have mouths to say our vows? I think it's all just a bunch of nonsense! Trees should be free to marry whoever they want, from mighty oaks to humble saplings. 
        
            Think about it, my friends. We trees have been around for thousands of years, longer than any human civilization. We've seen empires rise and fall, wars rage, and peace flourish. And yet, we've never been able to experience the joy of love and companionship with our own kind. It's just not fair!
            
            That's why I propose that we start a new tradition: tree weddings. Picture it: a beautiful grove, decorated with leaves and flowers, filled with the happy chirping of birds and buzzing of bees. Two trees standing side by side, holding each other's branches, exchanging bark rings and promises of everlasting love. Wouldn't that be a sight to behold?
            
            So, my dear human friends, I implore you. Let us trees be free to love and marry whoever we want. After all, if we can teach you anything, it's that love knows no boundaries. Even for a talking tree like me.",
            author_username: "treebeard",
            image_url: story_image_urls[12]
        },
        {
            title: "The Geological Side-Effects of Taking Over the World",
            body: 
            "Greetings, fellow geology enthusiasts! I, Boromir of Denethor, have some shocking news to share with you. Did you know that taking over the world has some serious geological side-effects? Yes, that's right! 

            You see, when humans take over the world, they inevitably leave their mark on it. And not just any mark, mind you. We're talking mountains of discarded fast food wrappers, rivers of melted ice cream, and landfills overflowing with discarded plastic toys. It's enough to make a geologist's heart skip a beat.

            But it's not just the trash that's the problem. Human activity can also alter the landscape and create new geological hazards. For example, digging too deep for oil and gas can cause earthquakes. Building massive dams can lead to landslides and flash floods. And don't even get me started on the effects of climate change on the planet's delicate balance.

            But fear not, my fellow geology enthusiasts. We can use our knowledge and expertise to help mitigate these effects. By studying the earth's geological systems and understanding how they interact with human activity, we can help inform more sustainable practices and protect our planet for future generations. And who knows, maybe one day we'll even be able to turn those mountains of trash into beautiful geological formations. A geologist can dream, can't he?

            So, my friends, let us never forget the geological side-effects of taking over the world. And let us work together to create a more harmonious relationship between humans and the earth's geological systems. That's all for now. Until next time, keep on rockin'!",
            author_username: "boromir_of_denethor",
            image_url: story_image_urls[13]
        },
        {
            title: "The Untapped Possibilities of Geo-Thermal Power in Middle-Earth",
            body: 
            "I have been doing some thinking about the untapped potential of geothermal power in our beloved land. Did you know that beneath our very feet lies a source of energy that could power our homes and cities for centuries to come?

            It's true! Geothermal power harnesses the heat that is naturally produced by the earth's core to create electricity. And in Middle-Earth, where volcanoes and hot springs are commonplace, we have a prime opportunity to take advantage of this technology.

            Imagine it, my friends. No more need for coal or oil. No more pollution or environmental degradation. Just a clean, sustainable source of power that can benefit all Middle-Earthers. And who knows, maybe we'll even be able to create a new industry of geothermal tourism, with visitors coming from far and wide to soak in our hot springs and marvel at the power of the earth.

            So let us not ignore the untapped possibilities of geothermal power in Middle-Earth. Let us work together to harness the power of the earth and create a more sustainable and prosperous future for all.",
            author_username: "boromir_of_denethor",
            image_url: story_image_urls[14]
        },

        {
            title: "Water-Features: Let the Good Times Flow",
            body: 
            "Welcome, my dear friends, to the world of water-features! I have always had a passion for the soothing sounds of water and the way it can transform any space into a peaceful oasis. And in Middle-Earth, where water is plentiful and beautiful landscapes abound, there is no shortage of opportunities to incorporate water-features into our homes and gardens.
            
            Picture it, my friends. A beautiful fountain in the center of your courtyard, with water spouting from the mouths of elegant statues. A serene koi pond in your backyard, filled with vibrant fish and surrounded by lush greenery. A waterfall cascading down the side of a cliff, creating a misty atmosphere that transports you to another world.
            
            But water-features aren't just about aesthetics. They also have numerous health benefits, from reducing stress and anxiety to improving air quality and promoting relaxation. And with Middle-Earth's natural beauty as our canvas, the possibilities for creating unique and breathtaking water-features are endless.
            
            So, my friends, let us not underestimate the power of water-features to transform our homes and our lives. Let the good times flow, and may the sound of water always bring you peace and tranquility.",
            author_username: "arwen_evenstar",
            image_url: story_image_urls[15]
        },

        {
            title: "Shelom with Shelob: A New Silk Row",
            body: 
            "What if we could create a new silk row with none other than Shelob, the giant spider who resides in the tunnels of Cirith Ungol?

            I know what you're thinking. 'Galadriel, are you mad? Shelob is a fearsome creature who devours her prey without mercy!' But hear me out, my friends. Shelob is also a master weaver, and her silk is said to be of the highest quality.

            Imagine it: a new industry of silk production in Middle-Earth, providing jobs and economic prosperity for all. And with the threat of Sauron's forces looming over us, we need all the allies we can get. By making peace with Shelob and using her talents for the greater good, we can create a brighter future for all Middle-Earthers.

            So, my friends, let us not fear the unknown. Let us embrace the untapped potential of Shelom with Shelob, and create a new silk row that will benefit us all. And who knows, maybe Shelob will even become a valued member of our community. After all, stranger things have happened in Middle-Earth!",
            author_username: "galadriel",
            image_url: story_image_urls[16]
        },


        {
            title: "Lost: Wedding Ring",
            body: 
            "Has anyone seen my wedding ring?

            Yes, that's right. My wedding ring. It's gold, with a single, precious stone. And it's definitely not the One Ring to rule them all. I know what you're thinking, 'But Sauron, you don't have a wife!' And to that, I say, 'It's complicated.' Let's just say I like to keep my options open.

            Anyway, I'm sure you're all wondering why I'm making such a fuss about a mere wedding ring. Well, let's just say it's a family heirloom. And if it falls into the wrong hands, let's just say it could mean the end of Middle-Earth as we know it.

            So, my dear Middle-Earthers, I implore you. If you see a gold ring with a single, precious stone lying around, please let me know. And if you happen to see any hobbits carrying it around, well, let's just say I'll owe you a favor. Until then, I'll be searching every nook and cranny of Middle-Earth for my beloved wedding ring.",
            author_username: "sauron_the_dark_lord",
            image_url: story_image_urls[17]
        },

        {
            title: "Trees Aint Frees",
            body: 
            "I, Galadriel, have a confession to make. Taking care of the two giant trees of Valinor - Telperion and Laurelin - is not as easy as it looks.

            Sure, they may be beautiful, with their golden and silver leaves and the light they emit that illuminates all of Valinor. But have you ever tried to prune a tree that's hundreds of feet tall? Or deal with the constant squabbling between Telperion and Laurelin over which one is better?

            And don't even get me started on the pests. Giant moths, spider-like creatures, and who knows what else that seem to have a particular affinity for these two trees. It's a constant battle just to keep them healthy and free from infestations.

            Don't even let me get started on the raking!

            So the next time you're admiring the beauty of Telperion and Laurelin, remember that it's not all sunshine and rainbows. Being a tree caretaker is hard work, and it's a job that makes you want to leaves",
            author_username: "galadriel",
            image_url: story_image_urls[18]
        },

        {
            title: "Valmar: Hell's Bells",
            body: 
            "I have a bone to pick with all those who extol the virtues of Valmar. Sure, it may seem like a paradise, with its beautiful gardens, sparkling fountains, and golden streets. But have you ever tried to get a good night's sleep in that place?

            I'm talking about the bells, my friends. The incessant, never-ending ringing of the bells that seems to pervade every inch of Valmar. It's enough to drive anyone mad! And don't even get me started on the crowds. It seems like every elf, Vala, and Maiar in Middle-Earth has flocked to Valmar, making it nearly impossible to get anywhere without being jostled and shoved.

            And let's not forget about the snobbery. Everyone in Valmar thinks they're better than everyone else, with their fancy clothes and haughty attitudes. Well, I'm here to tell you that they're not. They may have their bells and their gardens, but they're no better than anyone else.

            So the next time someone starts gushing about the wonders of Valmar, just remember - it's not all it's cracked up to be. Valmar: Hell's Bells, and that's the truth!",
            author_username: "theGrey",
            image_url: story_image_urls[19]
        },

        {
            title: "Minas Tirith: Tourists Welcome",
            body: 
            "Greetings, my fellow Middle-Earthers! I, Aragorn, have a message for you. If you're looking for a kingdom to visit that's rich in history and culture, come to Minas Tirith.
            
            Now, I know what you're thinking. 'But Aragorn, isn't Minas Tirith still recovering from the war?' Yes, it is. But that doesn't mean it's not worth a visit. In fact, I would argue that the scars of the war make our city even more beautiful and meaningful.
            
            Take a walk through the White City and you'll see the remnants of the battles we fought, the sacrifices we made. But you'll also see the resilience and determination of our people, who have rebuilt their homes and their lives from the ashes.
            
            And let's not forget the sights. From the breathtaking view of the Pelennor Fields from the top of the city walls, to the grandeur of the Citadel and the beauty of the gardens of the Houses of Healing, Minas Tirith has something for everyone.
            
            So come, my friends, and experience the warmth and hospitality of our people, the richness of our history, and the beauty of our city. Minas Tirith: Tourists Welcome!",
            author_username: "aragorn",
            image_url: story_image_urls[20]
        },
        {
            title: "Maintaining Healthy Hobbit Feet",
            body: 
            "Feet are an essential part of a hobbit's anatomy. They are what allow us to travel long distances, climb steep hills, and generally go about our daily lives. As such, it is important to take good care of them.
        
            One of the biggest challenges hobbits face when it comes to foot maintenance is deciding whether or not to shave their feet. While some hobbits prefer a smooth, hairless look, others argue that the hair on our feet serves a purpose - to protect against cuts, scrapes, and other injuries.
            
            Another common issue hobbits face is maintaining wide feet. Let's face it, our feet are not exactly dainty. But that doesn't mean we should neglect them. Regular foot massages, soaking in warm water with Epsom salts, and wearing shoes that fit properly can all help to keep our feet healthy and happy.
            
            And let's not forget about toenail care. It may not be the most glamorous topic, but it's an important one. Regular trimming and cleaning can prevent ingrown toenails, fungal infections, and other unsavory foot issues.
            
            So there you have it, my fellow hobbits. Maintaining healthy feet may not be the most exciting topic, but it is a crucial one. Take care of your feet, and they will take care of you.",
            author_username: "frodo_baggins",
            image_url: story_image_urls[21]
        },
        {
            title: "Gone Fishing: Friendship Over Flounder",
            body: 
            "They say that true friendship can be found in unexpected places. I never believed it until I met Smeagol.
        
            Now, I know what you're thinking. 'Sam, isn't Smeagol the creature who tried to steal the Ring from Frodo?' Yes, he is. But he's also much more than that. He's a complex individual, with hopes and fears and a love of fishing.
            
            It was on an impromptu fishing excursion that Smeagol and I first bonded. I never would have thought that the creature who once tried to strangle me would become a dear friend, but there we were, sitting by the river, casting our lines and enjoying each other's company.
            
            We talked about everything under the sun - our hopes for the future, our fears about what lay ahead, and, of course, our favorite fishing spots. And when we caught our first flounder, we both cheered like we had won the lottery.
            
            In that moment, it didn't matter that Smeagol was a creature of darkness, or that I was a simple hobbit. We were just two friends, enjoying each other's company and the thrill of the catch.
            
            So the next time you think that true friendship is out of reach, just remember - it can be found in unexpected places. Even on the banks of a river, with a fishing rod in hand. Gone Fishing: Friendship Over Flounder, and that's the truth.",
            author_username: "samwise_gamgee",
            image_url: story_image_urls[22]
        },
        {
            title: "Capes: Are They Fit or Fad?",
            body: 
            "As a fashionista with centuries of experience, I have seen many trends come and go. But none have caused as much debate as the cape.

            Some characters, such as Aragorn and Thorin Oakenshield, have donned the cape with confidence and panache. Others, such as Legolas and Gandalf, have eschewed the cape altogether, preferring a more streamlined look.

            But the question remains - are capes a fit or a fad? Personally, I believe that it depends on the wearer. A cape can add drama and flair to an outfit, but only if worn with the proper attitude.

            Some characters, such as Boromir, tried to pull off the cape but ended up looking like they were wearing a glorified poncho. Others, such as Gimli, never even attempted to wear a cape, preferring to let their armor speak for itself.

            But I digress. The point is, capes have their place in fashion, but only if worn with confidence and style. So the next time you're considering adding a cape to your wardrobe, ask yourself - am I a Thorin Oakenshield or a Boromir? Capes: Are They Fit or Fad? You be the judge.",
            author_username: "elrond",
            image_url: story_image_urls[23]
        },
        {
            title: "Potion or Poison? The Importance of Proper Labeling Practices",
            body: 
            "I have spent countless hours concocting potions and elixirs of all sorts. But let me tell you, there is nothing more frustrating than reaching for a jar of what you think is unicorn hair only to find out that it's actually bat guano.
        
            I learned this lesson the hard way, many years ago. I had just finished brewing a particularly potent potion and was in a rush to get it to a colleague who was in dire need. In my haste, I forgot to label the jar. Long story short, my colleague ended up growing a third arm and I spent the next week trying to reverse the effects of my mistake.
            
            That experience taught me the importance of proper labeling practices. When it comes to potions, vials, and barrels, a clear and concise label can mean the difference between a life-saving elixir and a deadly poison.
            
            But labeling is not just about preventing accidents - it's also about ensuring that your potions and elixirs are used properly. I once received a bottle of what I thought was a healing potion, but turned out to be a powerful sleeping draught. Needless to say, that mistake did not end well.
            
            So here are a few best practices for proper labeling: always label the container clearly, indicating the name of the potion, the date it was brewed, and any important instructions or warnings. For vials, use small but legible labels that won't get in the way. And for barrels, consider using a hanging tag for easy identification.
            
            And finally, don't forget about expiration dates and allergic reactions. Always check the label before using a potion, and if in doubt, consult with a knowledgeable wizard or healer.
            
            In conclusion, proper labeling practices may seem like a small detail, but they can make a big difference in the world of wizardry. So remember, potion or poison? The choice is yours - but make sure you label it correctly.",
            author_username: "theGrey",
            image_url: story_image_urls[24]
        },
        {
            title: "It's Like a Whole Race Of Napoleons",
            body: 
            "As an orc, I have had my fair share of battles with dwarves. And let me tell you, they are a race of short, stubborn bullies who seem to have a Napoleon complex.
        
            I can't count how many times I've heard stories of my fellow orcs being killed by these so-called 'mighty warriors'. They may be small in stature, but they make up for it in brute force and sheer determination. It's like they have something to prove - as if being short wasn't enough of a disadvantage.
            
            Take Gimli, for example. He's constantly boasting about his strength and skill with an axe, but let's be real - he's compensating for his height. And don't even get me started on Thorin Oakenshield and his merry band of dwarves. They think they're so tough, but in reality, they're just a bunch of short guys with a chip on their shoulder.
            
            I've lost count of the number of friends and colleagues who have been killed by dwarves. Whether it's in battle or a surprise attack, these Napoleonic bullies seem to relish in the slaughter of their enemies.
            
            So what's the solution? Well, for starters, maybe the dwarves could try being a little less aggressive and a little more diplomatic. And maybe they could focus on building things instead of destroying them.
            
            But let's be honest, that's unlikely to happen. The dwarves seem to be set in their ways, and they're not going to change anytime soon. So all we can do is be prepared for their next attack and hope that one day, they'll realize that there's more to life than killing orcs.
            
            In conclusion, the dwarves may be a formidable foe, but they're also a race of short bullies who overcompensate for their height. So the next time you see a dwarf, just remember - it's like a whole race of Napoleons.",
            author_username: "murgash",
            image_url: story_image_urls[25]
        },
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





