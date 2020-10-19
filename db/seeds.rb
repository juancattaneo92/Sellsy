# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email:'demoGuest@sellsy.com', f_name:'Demo Guest', password:'demopassword')

Product.create(title:'Product1', description:'Beautiful product', price:'20.00', cart_id:'1')
Product.create(title:'Product2', description:'Amazing product', price:'10.00', cart_id:'2')
Product.create(title:'Product3', description:'Great product', price:'30.00', cart_id:'3')
Product.create(title:'Product4', description:'Useful product', price:'50.00', cart_id:'4')