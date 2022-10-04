# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "💣 Destroying previous seeds..."
Location.destroy_all
Menu.destroy_all
Order.destroy_all
User.destroy_all


puts "🍔 Seeding Locations"
location_1 = Location.create(address: "200 Broadway St, New York, NY 10038")
location_2 = Location.create(address: "409 Fulton St, Brooklyn, NY 11201")
location_3 = Location.create(address: "1 W 125th St, New York, NY 10027")

puts "🍔 Seeding Menu"
Menu.create(item_name: "Burger", price: 9.75, image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg")
Menu.create(item_name: "Cheese Burger", price: 9.75, image: "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "Chipotle Burger", price: 9.75, image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "BBQ Burger", price: 9.75, image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "Bacon Burger", price: 9.75, image: "https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "Mushroom Swiss", price: 9.75, image: "https://images.pexels.com/photos/1199956/pexels-photo-1199956.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "Coke", price: 2, image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
Menu.create(item_name: "Sprite", price: 2, image: "https://images.pexels.com/photos/4161715/pexels-photo-4161715.jpeg?auto=compress&cs=tinysrgb&w=600")
Menu.create(item_name: "Dr Pepper", price: 2, image:"https://images.pexels.com/photos/9468462/pexels-photo-9468462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
Menu.create(item_name: "Fries", price: 1.75, image: "https://www.thespruceeats.com/thmb/yjIQQytfjzaCRZ7tA6oBcXAapJc=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg")
Menu.create(item_name: "Onion Rings", price: 2, image: "https://images.pexels.com/photos/8880738/pexels-photo-8880738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
Menu.create(item_name: "Salad", price: 3, image: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg")

puts "🍔 Seeding Done!"
