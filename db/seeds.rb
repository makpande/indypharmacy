# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
15.times do
  Topic.create!(
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph,
    topic_image: Faker::Avatar.image("Topic_Image", "200x200")
  )
end
topics = Topic.all

50.times do
   Post.create!(
     topic:  topics.sample,
     title:  Faker::Lorem.sentence,
     body:   Faker::Lorem.paragraph,
     post_image: Faker::Avatar.image("Post_Image", "200x200")
   )
 end

 posts = Post.all
