# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Project.destroy_all

user1 = User.create!(name: 'Demo User', email: 'demo@user.com', password: 'password', location: 'San Francisco', biography: 'I am a San Francisco-based engineer')
user2 = User.create!(name: 'Alisa Weilerstein', email: 'cellista@aa.io', password: 'password', location: 'San Francisco', biography: 'Hello, I love making things out of whatever I can get my hands on')
user3 = User.create!(name: 'Steven Isserlis', email: 'monkey@aa.io', password: 'password', location: 'San Francisco', biography: 'Lover of art of any kind')
user4 = User.create!(name: 'Mstislav Rostropovich', email: 'cello@aa.io', password: 'password', location: 'Washington, DC', biography: 'Spreading love and happiness')
user5 = User.create!(name: 'Janos Starker', email: 'janos@aa.io', password: 'password', location: 'Bloomington, IN', biography: 'Helping non-profits is my passion!')
user6 = User.create!(name: 'Sol Gabetta', email: 'catgirl@aa.io', password: 'password', location: 'London', biography: 'Former ballet dancer, currently a photographer')
user7 = User.create!(name: 'Jacqueline DuPre', email: 'password123@aa.io', password: 'password', location: 'New York', biography: 'I am a freelance writer for the New Yorker, looking to publish my first book!')
user8 = User.create!(name: 'Pieter Wispelwey', email: 'wisps@aa.io', password: 'password', location: 'Amsterdam', biography: 'I love to paint, anywhere and anything')
user9 = User.create!(name: 'Mischa Maisky', email: 'cellist@aa.io', password: 'password', location: 'Dallas', biography: 'I have a million startup ideas, let me tell you just a few')
user10 = User.create!(name: 'Pablo Casals', email: 'pablo@aa.io', password: 'password', location: 'Puerto Rico', biography: 'An aspiring filmmaker')
user11 = User.create!(name: 'Kronos Quartet', email: 'krono@aa.io', password: 'password', location: 'San Francisco', biography: 'An award-winning quartet that mixes many genres')
user12 = User.create!(name: 'Paul Tortelier', email: 'torti@aa.io', password: 'password', location: 'Paris', biography: 'Recent culinary school grad looking to make a name for myself')



#categories: 
# category1 = Category.create!(category_name: "Arts")
# category2 = Category.create!(category_name: "Comics & Illustration")
# category3 = Category.create!(category_name: "Design & Tech")
# category4 = Category.create!(category_name: "Film")
# category5 = Category.create!(category_name: "Food & Craft")
# category6 = Category.create!(category_name: "Games")
# category7 = Category.create!(category_name: "Music")
# category8 = Category.create!(category_name: "Publishing")


#projects
project1 = Project.create!(title: "The Rite of Spring: Fully Staged at Davies Symphony Hall", 
    campaign: "Help InterMusicSF reach our funding goal and see the City Ballet perform the original Rite of Spring choreography at Davies Symphony Hall", 
    funding_goal: 20000,
    amount_pledged: 1055,
    end_date: Date.new(2021,12,1),
    location: 'San Francisco', 
    description: 'See what caused a riot in 1913!', 
    author_id: user1.id,
    category_id: 1, #arts
    updates: '', 
    faq: '', 
    risks: 'Covid-19 has pushed back our timeline by at least a year, but we would really appreciate your support')

project2 = Project.create!(title: "Why Beethoven Threw the Stew (And Lots More Stories about the Lives of Great Composers)", 
    campaign: "I grew up playing music, but the kids around me all thought I was weird. They didn't know how interesting classical music is and the stories behind the composers who wrote the music, so I would like to tell you a few of my favorites", 
    funding_goal: 7500,
    amount_pledged: 8050,
    end_date: Date.new(2021,2,1),
    location: 'Daly City, CA', 
    description: "Fun stories about classical composers for kids", 
    author_id: user3.id,
    category_id: 2, #comics/illustration 
    updates: 'Wow, we surpassed our goal! Thank you all!', 
    faq: '', 
    risks: 'We run the risk of not finding a publisher, as the market for childrens books is over-saturated at the moment')

project3 = Project.create!(title: "The Block Strap", 
    campaign: "We are developing a rig that lets cellists play standing up. This innovative technology can help keep cellists everywhere from feeling left out while other musicians walk around", 
    funding_goal: 5000,
    amount_pledged: 4355,
    end_date: Date.new(2021,1,1),
    location: 'Cleveland, OH', 
    description: "Introducing the world's first cello strap that lets cellists play standing up!", 
    author_id: user9.id,
    category_id: 3, # design/tech
    updates: 'Less than 1000 to go!', 
    faq: 'Q: How does it work? A: the strap wraps around the scroll, over your shoulder, and down to the end pin', 
    risks: 'Reaching our funding goal, as our target audience is a rather niche market')

project4 = Project.create!(title: "Forte", 
    campaign: 'This is a film that chronicles the lives of three women in music, including a composer who will write the music for the film', 
    funding_goal: 15000,
    amount_pledged: 6500,
    end_date: Date.new(2021,3,1),
    location: 'New York', 
    description: 'We will be filming a documentary about three women in music, traveling with them every step of the way to make their dreams come true', 
    author_id: user10.id, 
    category_id: 4, #film
    updates: '', 
    faq: 'Q: When will it be released? A: In 2021', 
    risks: 'While we have so much passion for this film, we worry that we will not have the resources to complete it')

project5 = Project.create!(title: "Amigurumi Musical Instruments", 
    campaign: "Help us fund our classes and you can learn to crochet your favorite instruments!", 
    funding_goal: 10000,
    amount_pledged: 2500,
    end_date: Date.new(2021,6,1),
    location: 'Berkeley, CA', 
    description: 'Learn to make your favorite instruments!', 
    author_id: user2.id, # user2
    category_id: 5, # food/craft
    updates: '', 
    faq: '', 
    risks: "If we don't meet our funding goal, we run the risk of not having the resources to hold the classes")

project6 = Project.create!(title: "Violin Hero", 
    campaign: "Is Guitar Hero too easy for you? We are developing the newest version of Guitar Hero: Violin Hero!", 
    funding_goal: 50000,
    amount_pledged: 50050,
    end_date: Date.new(2020,12,31),
    location: 'Cleveland, OH', 
    description: "For those that are bored with Guitar Hero", 
    author_id: user6.id,
    category_id: 6, #games
    updates: '', 
    faq: 'Q: Is this an April Fools joke? A: No, of course not', 
    risks: "People not taking us seriously")

project7 = Project.create!(title: "Women in Music Commission", 
    campaign: 'We are commissioning five new works by female composers for our upcoming album, which we hope will inspire young female musicians everywhere to follow their dreams of composing', 
    funding_goal: 25000,
    amount_pledged: 5500,
    end_date: Date.new(2021,3,1),
    location: 'San Francisco', 
    description: 'We will be commissioning five new works by female composers, and need your help to bring this project to life', 
    author_id: user11.id,
    category_id: 7, #music
    updates: '', 
    faq: '', 
    risks: 'Covid-19 has prevented us from being able to rehearse and perform')

project8 = Project.create!(title: "Incorporating Music Education into the Bard Prison Initiative", 
    campaign: 'I have spent years researching music education and believe it can be a powerful tool that can be used to better the American prison system. I have concluded my study and am looking to publish my findings', 
    funding_goal: 2000,
    amount_pledged: 1175,
    end_date: Date.new(2021,3,1),
    location: 'Kingston, NY', 
    description: "Please help me publish my findings on how music education can have an impact on prison reform in the US", 
    author_id: user7.id,
    category_id: 8, #publishing
    updates: '', 
    faq: '', 
    risks: 'Not reaching our funding goal is our primary concern')

project9 = Project.create!(title: "Stalinist Russia in Retrospect", 
    campaign: 'I will be playing a recital of music from the Stalin era, interspersed with personal stories from my experience of that time', 
    funding_goal: 12000,
    amount_pledged: 11505,
    end_date: Date.new(2021,4,15),
    location: 'New York', 
    description: 'A recital of music by Prokofiev, Khachaturian, and my friend, Dmitri Shostakovich', 
    author_id: user4.id,
    category_id: 7, #music
    updates: 'Thank you all for your support thus far', 
    faq: '', 
    risks: "The Russian government is not happy that I am putting on this program, but I will do everything I can to make it happen")

project10 = Project.create!(title: "The Holocaust: Remembered", 
    campaign: "A gallery exhibit of photographs from the Holocaust, paired with music written in concentration camps", 
    funding_goal: 5000,
    amount_pledged: 5150,
    end_date: Date.new(2021,5,1),
    location: 'Bloomington, IN', 
    description: "Pairing photography with music in memory of the Holocaust", 
    author_id: user5.id, 
    category_id: 1, # arts
    updates: 'We have found a venue, thank you all for your support', 
    faq: '', 
    risks: 'We are having some difficulty finding a venue for the exhibit')

project11 = Project.create!(title: "Tortelier's Tortellini", 
    campaign: "I may be French, but I have had a lifelong passion for pasta. I am working towards opening a pop-up pasta shop in the heart of Paris and would love your support!", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'Paris', 
    description: 'Please help me realize my dream of opening my own pasta shop!', 
    author_id: user12.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "Q: What is your pasta recipe? A: That's a secret!", 
    risks: "Covid-19 has taken a toll on all of us, I'm afraid we may need to hold off on opening until there is a vaccine")

project12 = Project.create!(title: "Test Project", 
    campaign: "Test campaign", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'San Francisco', 
    description: 'Test description', 
    author_id: user1.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "", 
    risks: "Covid-19")

project13 = Project.create!(title: "Test Project", 
    campaign: "Test campaign", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'San Francisco', 
    description: 'Test description', 
    author_id: user1.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "", 
    risks: "Covid-19")

project14 = Project.create!(title: "Test Project", 
    campaign: "Test campaign", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'San Francisco', 
    description: 'Test description', 
    author_id: user1.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "", 
    risks: "Covid-19")

project15 = Project.create!(title: "Test Project", 
    campaign: "Test campaign", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'San Francisco', 
    description: 'Test description', 
    author_id: user1.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "", 
    risks: "Covid-19")

project16 = Project.create!(title: "Test Project", 
    campaign: "Test campaign", 
    funding_goal: 15000,
    amount_pledged: 10580,
    end_date: Date.new(2021,5,1),
    location: 'San Francisco', 
    description: 'Test description', 
    author_id: user1.id, 
    category_id: 5, #food/craft
    updates: '', 
    faq: "", 
    risks: "Covid-19")

file1 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/rite-of-spring.jpg")
project1.photo.attach(io: file1, filename: "rite-of-spring.jpg")

file2 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/beethoven-book.jpg")
project2.photo.attach(io: file2, filename: "beethoven-book.jpg")

file3 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/block-strap.jpg")
project3.photo.attach(io: file3, filename: "block-strap.jpg")

file4 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/forte.jpg")
project4.photo.attach(io: file4, filename: "forte.jpg")

file5 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/ami-uke.jpg")
project5.photo.attach(io: file5, filename: "ami-uke.jpg")

file6 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/violin-hero.jpg")
project6.photo.attach(io: file6, filename: "violin-hero.jpg")

file7 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/kronos.jpg")
project7.photo.attach(io: file7, filename: "kronos.jpg")

file8 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/bard.jpg")
project8.photo.attach(io: file8, filename: "bard.jpg")

file9 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/shosty-rosty.jpg")
project9.photo.attach(io: file9, filename: "shosty-rosty.jpg")

file10 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/holocaust.jpg")
project10.photo.attach(io: file10, filename: "holocaust.jpg")

file11 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/tortellini.jpg")
project11.photo.attach(io: file11, filename: "tortellini.jpg")

file12 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/puppy_pic.jpg")
project12.photo.attach(io: file12, filename: "puppy_pic.jpg")

file13 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/puppy_pic.jpg")
project13.photo.attach(io: file13, filename: "puppy_pic.jpg")

file14 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/puppy_pic.jpg")
project14.photo.attach(io: file14, filename: "puppy_pic.jpg")

file15 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/puppy_pic.jpg")
project15.photo.attach(io: file15, filename: "puppy_pic.jpg")

file16 = open("https://project-ascender-seeds.s3-us-west-1.amazonaws.com/puppy_pic.jpg")
project16.photo.attach(io: file16, filename: "puppy_pic.jpg")
