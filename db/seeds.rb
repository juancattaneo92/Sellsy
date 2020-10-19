
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

User.create(email:'demoGuest@sellsy.com', f_name:'Demo Guest', password:'demopassword')

Product.create(title:'Product1', description:'Beautiful product', price:'20.00', cart_id:'1')
Product.create(title:'Product2', description:'Amazing product', price:'10.00', cart_id:'2')
Product.create(title:'Product3', description:'Great product', price:'30.00', cart_id:'3')
Product.create(title:'Product4', description:'Useful product', price:'50.00', cart_id:'4')
Product.create(title:'Product5', description:'Great tool', price:'20.00', cart_id:'5')
Product.create(title:'Product6', description:'Amazing lamp', price:'10.00', cart_id:'6')
Product.create(title:'Product7', description:'Great watch', price:'30.00', cart_id:'7')
Product.create(title:'Product8', description:'Useful tool', price:'50.00', cart_id:'8')
Product.create(title:'Product9', description:'Beautiful rugs', price:'20.00', cart_id:'9')
Product.create(title:'Product10', description:'Amazing t-shirts', price:'10.00', cart_id:'10')
Product.create(title:'Product11', description:'Great candles', price:'30.00', cart_id:'11')
Product.create(title:'Product12', description:'Useful kit DIY', price:'50.00', cart_id:'12')
Product.create(title:'Product13', description:'Beautiful dress', price:'20.00', cart_id:'13')
Product.create(title:'Product14', description:'Amazing towel', price:'10.00', cart_id:'14')
Product.create(title:'Product15', description:'Great necklace', price:'30.00', cart_id:'15')
Product.create(title:'Product16', description:'Useful product', price:'50.00', cart_id:'16')
Product.create(title:'Product17', description:'Beautiful bags', price:'20.00', cart_id:'17')
Product.create(title:'Product18', description:'Amazing notebooks', price:'10.00', cart_id:'18')
Product.create(title:'Product19', description:'Great pants', price:'30.00', cart_id:'19')
Product.create(title:'Product20', description:'Useful keychain set', price:'50.00', cart_id:'20')