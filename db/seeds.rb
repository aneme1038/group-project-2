# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create({
  "username" => "Jake Peralta",
  "avatar" =>"https://imgur.com/6BG11Mm.png",
  "body" => "The doctor said all my bleeding was internal -- that's where the blood's supposed to be"
})

Post.create({
  "username" => "Captain Raymond Holt",
  "avatar" =>"https://imgur.com/6BG11Mm.png",
  "body" => "When people say 'how are you', they mean 'hello'. When people say 'what's up', they mean 'I am a person not worth talking to'"
})