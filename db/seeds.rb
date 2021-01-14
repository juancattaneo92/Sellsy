
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all
Category.destroy_all

user1 = User.create(email:'demoGuest@sellsy.com', f_name:'Demo Guest', password:'demopassword')
user2 = User.create(email:'Kevin02@sellsy.com', f_name:'Kevin', password:'Kevinpassword')
user3 = User.create(email:'Mary03@sellsy.com', f_name:'Mary', password:'Marypassword')
user4 = User.create(email:'Robbie04@sellsy.com', f_name:'Robbie', password:'Robbiepassword')
user5 = User.create(email:'Julie05@sellsy.com', f_name:'Julie', password:'Juliepassword')

prod1 = Product.create(title:'Handmade Rustic mug', category:'gifts', description:'These rustic mugs are hand-thrown on the wheel by me. Each one is unique but similar enough to make a nice set.', price:'26.00')
prod2 = Product.create(title:'Anti fog face mask, with filter pocket', category:'jewelry-accessories', description:'Face Mask with filter pocket and nose wire. One size fits most adults and youth. May suit for some adults', price:'10.00')
prod3 = Product.create(title:'Handmade VEGAN Replacement Apple Watch Strap', category:'jewelry-accessories', description:'Handpicked Ethnic patters and premium craftsmanship are used for the make of every band, proving you with a better, higher quality strap you deserve', price:'30.00')
prod4 = Product.create(title:'Landscape art, modern picture, set of three', category:'home-living', description:'Comes in a set of three, this prints works well on their own but also with other prints which can be found in the series.', price:'50.00')
prod5 = Product.create(title:'Table lamp-Desk, lamp-Rustic home decor-Gift', category:'home-living', description:'Handcrafted by a small team of experienced craftsman in the USA with great attention to detail, using the highest quality materials and parts', price:'40.00')
prod6 = Product.create(title:'Bohemian colorful Rug multi colors', category:'home-living', description:'Amazing lamp', price:'100.00')
prod7 = Product.create(title:'Sterling Silver Earrings Set', category:'jewelry-accessories', description:'Gold-filled jewelry is jewelry composed of a solid layer of gold (typically constituting at least 5% of the items total weight)', price:'15.00')
prod8 = Product.create(title:'Bartender Kit - Barware for Bartending', category:'gifts', description:'The BarStash bartending kit is the perfect bartender kit for any home. Our 17 piece set provides tools organized perfectly in a stylish bamboo stand.', price:'80.00')
prod9 = Product.create(title:'Knit Scarf, Chunky Scarf', category:'clothing-shoes', description:'An oversize chunky infinity scarf—a staple accessory you need for any chilly day. So cozy and soft, made of premium Italian wool knit fabric.', price:'60.00')
prod10 = Product.create(title:'Handcrafted Garden Tool Gift Set', category:'gifts', description:'Hand Forged Gardening Tool Gift Set By Fisher Blacksmithing from Bozeman Montana', price:'120.00')
prod11 = Product.create(title:'Perfect Autumn Day Scented Beeswax Candles in Amber Glass', category:'home-living', description:'Each candle is made with 100% pure beeswax, no added coloring, a cotton wick and just the necessary fragrance oil.', price:'10.00')
prod12 = Product.create(title:'Triangle Hanging Shelf', category:'home-living', description:'This is the miniature version of the Hanging Triangle Shelf, (which is listed below if you are looking for a larger size).', price:'25.00')
prod13 = Product.create(title:'Colorful And Unique Polymer Clay Figurine', category:'art-collectibles', description:'This colorful Handmade indoor sculpture made with polymer clay', price:'35.00')
prod14 = Product.create(title:'Mens Wallet, Minimalist Wallet, Personalized Wallet', category:'jewelry-accessories', description:'Mens Wallet, Minimalist Wallet, Personalized Wallet, Mens Wallet, Minimalist Wallet Men, Slim Wallet, Personalized Wallet Men, Engraved', price:'30.00')
prod15 = Product.create(title:'Brown Womens Bag, Leather Shoulder Bag,', category:'jewelry-accessories', description:'Since 2003 Floto leather bags have been produced by hand using old world craft methods and modern technology. Artisan made in Tuscany, Italy.', price:'120.00')
prod16 = Product.create(title:'Mr. and Mrs. Mug Set', category:'wedding-party', description:'These personalized Mr. and Mrs. Mugs are a great gift idea for an engagement, bridal shower, wedding or even an anniversary.', price:'15.00')
prod17 = Product.create(title:'Personalized Premium Leather Journal Notebook or Sketchbook', category:'craft-supplies', description:'You can get your leather journal with OR without engraved initials, name, or date!', price:'35.00')
prod18 = Product.create(title:'Acrylic Paint Bottles. Fluid Acrylic Primary Set ', category:'craft-supplies', description:' Perfect for painting on canvas, wood boards, papers, and other types of surfaces.', price:'10.00')
prod19 = Product.create(title:'Blackout Circle Clock, Monochrome Modern Décor', category:'home-living', description:'Blackout Circle Clock from Metal Art Studio. Less is more with this sleek and stylish modern wall clock, featuring a flawless black finish', price:'80.00')
prod20 = Product.create(title:'Custom Letter Bracelet', category:'jewelry-accessories', description:'Personalized Handmade Silver Jewelry handcrafted with love.', price:'25.00')


prod1.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/M14YnV6fZQ3HUARX2VXJp2sz"), filename:"image1.png");
prod1.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/M14YnV6fZQ3HUARX2VXJp2sz"), filename:"image1.png");
prod1.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/PRB7JV5TDTCsFA6sXuXG1BMh"), filename:"image2.png");
prod1.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/vFV7mr4J96YPgk5BdeRi8YVc"), filename:"image3.png");
prod1.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/23QDZij2dazJWYMiX4qeLLa4"), filename:"image4.png");
prod1.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/auFkS1Lz8xurri3iyt86Z6F8"), filename:"image5.png");

prod2.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/VEn7MvAvMMpWjAT7d5TjTGKW"), filename:"image6.png");
prod2.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/VEn7MvAvMMpWjAT7d5TjTGKW"), filename:"image6.png");
prod2.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/sB83o5u7KVZhs1YHJxhk2SX5"), filename:"image7.png");
prod2.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/LvSyZ6yQee1JP27ft1iabtD7"), filename:"image8.png");
prod2.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/VyHYp94et6e26VS5wDuHhMBR"), filename:"image9.png");
prod2.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/iikB1zdrrkKzK9X1u4Aub78M"), filename:"image10.png");

prod3.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/6u9BqSMPqi2vXUXb8RXNuRpN"), filename:"image11.png");
prod3.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/6u9BqSMPqi2vXUXb8RXNuRpN"), filename:"image11.png");
prod3.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/8NtV8A6wVenEBHiCQHWrj9HH"), filename:"image12.png");
prod3.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/wpKkUNHgzGbPiL79JX7PXBHe"), filename:"image13.png");
prod3.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/WLPdRKrEYQQzEhSa1mtUD66i"), filename:"image14.png");
prod3.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/d8zkCP8pLNsuyyUyQS2CYam4"), filename:"image15.png");

prod4.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/2PcjgMWq8NQ6mSjggkiWe7ek"), filename:"image16.png");
prod4.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/2PcjgMWq8NQ6mSjggkiWe7ek"), filename:"image16.png");
prod4.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/wy2Bf4fceXJ6NLwgS42tL7uB"), filename:"image17.png");
prod4.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/URdHqd1L4BVAMQfrmD7UG5FD"), filename:"image18.png");
prod4.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/FkA1r7hqckXH3B7nyJEhARNz"), filename:"image19.png");
prod4.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Q3SjouJ37UzkCKwsBAGbAX7R"), filename:"image20.png");

prod5.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/2McetRjzixccQEiQCXNUThsW"), filename:"image21.png");
prod5.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/2McetRjzixccQEiQCXNUThsW"), filename:"image21.png");
prod5.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/CfDAPobJTN5BTUCJqZKS9Vnh"), filename:"image22.png");
prod5.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Dau9UJXTnKLshurGa4ht9U8t"), filename:"image23.png");
prod5.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/tGassjie8x7QBz9bx2QyL5GB"), filename:"image24.png");
prod5.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/XcUsWRQxmQ1WgEkfFhA5FDdK"), filename:"image25.png");

prod6.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/CdoyaKFx2revHH3XZtZehaBJ"), filename:"image26.png");
prod6.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/CdoyaKFx2revHH3XZtZehaBJ"), filename:"image26.png");
prod6.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/4z6GbkWpeQ9Y9K4Qg5EYtJEW"), filename:"image27.png");
prod6.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/LZntzP7cLusouw3KkPfMyvU4"), filename:"image28.png");
prod6.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/gH6NkKt78UHghgBxHAdw7mdM"), filename:"image29.png");
prod6.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/HGM5YYaWjQdwXq9aUQnyf3wa"), filename:"image30.png");

prod7.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/JarK148io5ET8gn2RvMk5ZWy"), filename:"image31.png");
prod7.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/JarK148io5ET8gn2RvMk5ZWy"), filename:"image31.png");
prod7.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/G6MppQwRQrNrq5KRCDSYEx2M"), filename:"image32.png");
prod7.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/6PJCovQ8T6ioLTG3E6AS4vLE"), filename:"image33.png");
prod7.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/3jA9qYL6rwgijDePX8whXVbK"), filename:"image34.png");
prod7.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/4UQZMyVA1Rt48yAfrMY4S7rz"), filename:"image35.png");

prod8.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/bZq8KtpNjm6rWUrp8ECTnm8w"), filename:"image36.png");
prod8.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/bZq8KtpNjm6rWUrp8ECTnm8w"), filename:"image36.png");
prod8.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/CgJgvdKbY2N8ZDiFmPLUKE8s"), filename:"image37.png");
prod8.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/FxXnF2dPoicxvECGt6owXm99"), filename:"image38.png");
prod8.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/BvCcsypfMC4wsn8QwB4JNzjz"), filename:"image39.png");
prod8.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/WFJgvsNUvNnZPr8yeWbhK3Ns"), filename:"image40.png");

prod9.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/XM2qbhmXdQU6tYgFWFuiE7MD"), filename:"image41.png");
prod9.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/XM2qbhmXdQU6tYgFWFuiE7MD"), filename:"image41.png");
prod9.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/cYNW9JLYMDGjQTrasxk5uvLw"), filename:"image42.png");
prod9.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/sPSApx2z99ec95VzNvHpnRty"), filename:"image43.png");
prod9.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/1R6L31eWriZk5fN4E6jK7SAv"), filename:"image44.png");
prod9.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/vgKbmDNrRaVdgFGDxobc4k9W"), filename:"image45.png");

prod10.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/udS7FBLkEZYorXKuPwFzy8pb"), filename:"image46.png");
prod10.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/udS7FBLkEZYorXKuPwFzy8pb"), filename:"image46.png");
prod10.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/9yrP1yCzDiW4GuJq8zMdrGbE"), filename:"image47.png");
prod10.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/3HfMyyR5b6zRySPmuTxhLU1a"), filename:"image48.png");
prod10.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/gpDkYDkPZN4uSVmjJyxb74m8"), filename:"image49.png");
prod10.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/KMhgRQtChP9Dygs91U8MniWp"), filename:"image50.png");

prod11.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/tgnoj7ag9mnvAToezuEy6Fj6"), filename:"image51.png");
prod11.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/tgnoj7ag9mnvAToezuEy6Fj6"), filename:"image51.png");
prod11.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/XaaaMib32JM4sKbjRQg9AV8Q"), filename:"image52.png");
prod11.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/ywv5GsDp7TW4gQ2REjL7jTS2"), filename:"image53.png");
prod11.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/pHBEDP2Qf4kQZuTisiKDAsPe"), filename:"image54.png");
prod11.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/aNrHHDMdPXFbvKft9cFbRoif"), filename:"image55.png");

prod12.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/8Dou2VyNqC5hQ5etUwKLcuLU"), filename:"image56.png");
prod12.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/8Dou2VyNqC5hQ5etUwKLcuLU"), filename:"image56.png");
prod12.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/rivMD5Bkxw2PnCbWeWFvWavh"), filename:"image57.png");
prod12.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/QrjB365tExZKLV5EHTiRCkPW"), filename:"image58.png");
prod12.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/wnKLhv1WWqgQSs28q3conB7z"), filename:"image59.png");
prod12.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/oJGR7PdgA4zKRCDUKj4TpxMa"), filename:"image60.png");

prod13.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Bnn7gT2JhBSS6biBkJE1jZUn"), filename:"image61.png");
prod13.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Bnn7gT2JhBSS6biBkJE1jZUn"), filename:"image61.png");
prod13.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/iv52Lot25E2QTqnzgoq7B5i5"), filename:"image62.png");
prod13.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/FGbmJbebmJXyk1ztiFEG1nSw"), filename:"image63.png");
prod13.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/ybamcCV3Xm6ZwDCCkwEjZCqJ"), filename:"image64.png");
prod13.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/548pkuke6aMrDm1M5YX4EVhQ"), filename:"image65.png");

prod14.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hpNzXm4WekYYt4QTZ6KB29n8"), filename:"image66.png");
prod14.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hpNzXm4WekYYt4QTZ6KB29n8"), filename:"image66.png");
prod14.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/J7fmriB8TieEtBdQoL3uFg9Y"), filename:"image67.png");
prod14.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/94u8u1AVXfhxdNCcGQ8weEF2"), filename:"image68.png");
prod14.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Sv2eRr4oFAEVAhnR3txkvRTH"), filename:"image69.png");
prod14.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/52a46ozKpHfRL5UGpbTrc1TY"), filename:"image70.png");

prod15.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/RscNow2FUTZFFAcLtkBSswxB"), filename:"image71.png");
prod15.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/RscNow2FUTZFFAcLtkBSswxB"), filename:"image71.png");
prod15.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/i6YHYpoCY8w2zeKW2DAy9bja"), filename:"image72.png");
prod15.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/VXcfhnTNtAW9tpKaW7yD1i4A"), filename:"image73.png");
prod15.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/ZX5QSGR3o5hYeDc59q4C1CaA"), filename:"image74.png");
prod15.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/SUE6QRmb7fwzi9aHwff2HRA1"), filename:"image75.png");

prod16.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Re5KJFB6rXU7hhPqie8cTrGo"), filename:"image76.png");
prod16.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/Re5KJFB6rXU7hhPqie8cTrGo"), filename:"image76.png");
prod16.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hbxk3pT7cRXz2QtRVc7CrHeR"), filename:"image77.png");
prod16.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/CFRaMesK471s1EusV89qDJMu"), filename:"image78.png");
prod16.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/dhLyRgsPJPPNCBVGJyG4Guch"), filename:"image79.png");
prod16.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/371xiqGkwvkim7smbatXkCEV"), filename:"image80.png");

prod17.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/UkVWWw59djQV1EW16LuYVkjD"), filename:"image81.png");
prod17.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/UkVWWw59djQV1EW16LuYVkjD"), filename:"image81.png");
prod17.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/J3VSGxCitLG563Gqbptn2gEr"), filename:"image82.png");
prod17.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/45KfwqdSNU1ExbGZf1FU9Sp5"), filename:"image83.png");
prod17.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/dwmSJ9bj2YeY3FM2kxcicf9Y"), filename:"image84.png");
prod17.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/MvdnvxkRkWtkpae8rNENs6gj"), filename:"image85.png");

prod18.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/REtLjWxUAFFuuU3tdJtiCV2K"), filename:"image86.png");
prod18.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/REtLjWxUAFFuuU3tdJtiCV2K"), filename:"image86.png");
prod18.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/AndMmSbpR6seFqhSQ1HySEiy"), filename:"image87.png");
prod18.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/EUtY34kgLZrrCNYth1pmsBqS"), filename:"image88.png");
prod18.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/cnVeXvtnjuJMuBn1864LNRZM"), filename:"image89.png");
prod18.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/81c8Y96BtEdQuhPeBMYubNqD"), filename:"image90.png");

prod19.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/wcFYjoddHRnbHobtVjZjvZug"), filename:"image91.png");
prod19.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/wcFYjoddHRnbHobtVjZjvZug"), filename:"image91.png");
prod19.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/YUawFs6LB3LUrQQuf5UjE6sq"), filename:"image92.png");
prod19.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hhpMyxPHy4tTKnS1UDLy5C2W"), filename:"image93.png");
prod19.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/c1LW8FUfySRxdQQSycV8QGVQ"), filename:"image94.png");
prod19.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/qGkmLawB4sfPHaEdpsBWs9LJ"), filename:"image95.png");

prod20.main_photo.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hKKcPF6Wt4ZZrCDGeNPseqHD"), filename:"image96.png");
prod20.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/hKKcPF6Wt4ZZrCDGeNPseqHD"), filename:"image96.png");
prod20.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/MqBaVKB2JL8KgBhpQ5p6yQc1"), filename:"image97.png");
prod20.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/1CZzSKoekF5nsZmhgJW3tTzK"), filename:"image98.png");
prod20.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/47zfW3TB8P6tWm7uE6xGc4ke"), filename:"image99.png");
prod20.photos.attach(io: open("https://sellsy-active-storage-dev.s3-us-west-1.amazonaws.com/jCNmHCkTw5hwkhSjpTJgAZqS"), filename:"image100.png");



review1 = Review.create(
    body: "Absolutely love these mugs, the perfect size! Shipped with a lot of protection and quickly too! Very happy with the product and recommend this shop!",
    rating: 5,
    user_id: user2.id,
    product_id: prod1.id)

review2 = Review.create(
    body: "Love my new mug. Beautiful styling. It is quite large and holds about two regular cups of tea at once. The grip is very smooth and fits my small hands comfortably. All in all, a very excellent purchase that will bring me morning happiness for a long time to come!",
    rating: 5,
    user_id: user3.id,
    product_id: prod1.id)

review3 = Review.create(
    body: "I gave it as a gift and they love it. It is very pretty and holds a nice amount of liquid. It does not look 'handmade' but it is very nice.",
    rating: 5,
    user_id: user4.id,
    product_id: prod1.id)

review4 = Review.create(
    body: "This is my second mug from this store Top quality and beauty, good feel in the hand, easy grip, rich color. Love it.",
    rating: 5,
    user_id: user5.id,
    product_id: prod1.id)

review5 = Review.create(
    body: "Absolutely amazing! Super good quality. Super breathable but also feels protective. The ear straps are very comfortable and the fabric is super soft. I’m more then pleased with my purchase, I would highly recommend!",
    rating: 5,
    user_id: user2.id,
    product_id: prod2.id)

review6 = Review.create(
    body: "Very comfortable fit and very cute! It doesn't hug against my face or suck all up inside my mouth when I breathe, and having it adjustable is so so great. I have to wear a mask for work and most of them put so much pressure on the back of my ears and are very uncomfortable, I didn't have any of that with this mask.",
    rating: 5,
    user_id: user3.id,
    product_id: prod2.id)

review7 = Review.create(
    body: "These were perfect. Easy to breathe in. Easy to tighten and loosen as needed. And sooooo cute. Thanks!",
    rating: 5,
    user_id: user4.id,
    product_id: prod2.id)

review8 = Review.create(
    body: "Like it but the method of shipping is not ideal..for some reason it went from Florida all the way to Hawaii and has been there for over a week and I ordered it 2 weeks ago. I own another mask and it is beautiful work!",
    rating: 5,
    user_id: user5.id,
    product_id: prod2.id)

review9 = Review.create(
    body: "I HIGHLY recommend this band and this shop!! This shop is absolutely amazing! When I received my band it was a smidge too big. I sent them a message and they were more than happy to exchange it for me! they were kind, friendly, and very quick responding to my messages. The band itself is of amazing quality. It is stretchy, comfortable and very cute! I will definitely be ordering from this shop again!",
    rating: 5,
    user_id: user2.id,
    product_id: prod3.id)

review10 = Review.create(
    body: "I really like this watchband! It looks great, fits snug but is extremely comfortable. This will be the band I wear most often! I chose a print that I didn't think was neutral but it actually looks fine... maybe because it matches the colors of my rings. :) Very happy with this purchase!!",
    rating: 5,
    user_id: user3.id,
    product_id: prod3.id)

review11 = Review.create(
    body: "Fantastic! Perfect fit, snug, just like I wanted! Will be ordering more! If only they had some that were hair proof so when I’m at work (I’m a dog groomer) the hair doesn’t get embedded in the fibers! Lol.",
    rating: 5,
    user_id: user4.id,
    product_id: prod3.id)

review12 = Review.create(
    body: "By far my most FAVORITE watch band ever. It is a little snug, but I’ve gotten used to it. It’s PERFECT for active people. I don’t have to worry about it unbuckling or slipping off. This is the absolute best band for swimming. Love love love. I can’t wait to order more!",
    rating: 5,
    user_id: user5.id,
    product_id: prod3.id)

review13 = Review.create(
    body: "Love them! Adds color to my room! Not as bright as the picture shows but I really like them. Compliments my mid-century modern space.",
    rating: 5,
    user_id: user2.id,
    product_id: prod4.id)

review14 = Review.create(
    body: "I love these prints. I bought frames with mats from Amazon Judy like the pic. The colors are so vibrant. Plus I had to change the size of prints after the order and the seller was great about it!",
    rating: 5,
    user_id: user3.id,
    product_id: prod4.id)

review15 = Review.create(
    body: "Love the artwork!! Is as beautiful in person as in the pictures. Has really added flare to our living room!! Frames purchased from another Etsy shop. Shipped in round tube. Was concerned at first if the would flatten out, but no worries. A couple of days and they were flattened out for frames.",
    rating: 5,
    user_id: user4.id,
    product_id: prod4.id)

review16 = Review.create(
    body: "Love these! They went perfectly above our bed. So vibrant!",
    rating: 5,
    user_id: user5.id,
    product_id: prod4.id)

review17 = Review.create(
    body: "This lamp is SO COOL! I don't often write feedback but I just had to. The light from the bulbs is bright but so warm, it's amber and gives off a light that's the color of FIRE. It gives the whole room a glow like there's a fire in the fireplace! I love it. I have it in front of a bay window and light it at dusk. I can't say enough good things about it! Thank you so much!",
    rating: 5,
    user_id: user2.id,
    product_id: prod5.id)

review18 = Review.create(
    body: "Absolutely love this lamp. It fits the style of my home office perfectly. Well built! Highly recommend this shop!",
    rating: 5,
    user_id: user3.id,
    product_id: prod5.id)

review19 = Review.create(
    body: "This lamp is AMAZING!!! I love it!! So well made and looks so cool. I definitely recommend the dimmer option... being able to adjust the brightness is great for a lamp where the bulbs are exposed and full brightness might be too harsh - it's also cool to be able to lower the brightness so the filament is softly glowing",
    rating: 5,
    user_id: user4.id,
    product_id: prod5.id)

review20 = Review.create(
    body: "EXCELLENT customer service!! I would definitely recommend this light - or any of these items.I love this lamp. I selected the dimming feature and enjoy dimming the bulbs at times.",
    rating: 5,
    user_id: user5.id,
    product_id: prod5.id)

review21 = Review.create(
    body: "Beautiful rug, just gorgeous! The colours are vibrant and it feels lovely to walk on. Thank you so much!",
    rating: 5,
    user_id: user2.id,
    product_id: prod6.id)

review22 = Review.create(
    body: "My rug took a while to get to me because of the coronavirus shipping restrictions, but the shop owners were very communicative about it and ready to help if I needed it. I am really happy with this purchase. I love the colors of the rug, they are even more vibrant than I expected.",
    rating: 5,
    user_id: user3.id,
    product_id: prod6.id)

review23 = Review.create(
    body: "I love this rug! I bought it for my daughter's room, and it is great. I can wash it when it gets dirty, and it looks great. Has held up well, and I love the colors. It looks so great and adds the perfect pop of color to her room!",
    rating: 5,
    user_id: user4.id,
    product_id: prod6.id)

review24 = Review.create(
    body: "I really love the rug! I was worried about shipping but the seller’s response was quick n accurate. My cats love the rug more than I do. Price was very reasonable and I love the natural texture of sisal.",
    rating: 5,
    user_id: user5.id,
    product_id: prod6.id)

review25 = Review.create(
    body: "These are so cool! Very different and look just as pictured. I love them & can’t wait to wear them. shipping was very quick & they were packaged so nicely. Will buy again from this company!",
    rating: 5,
    user_id: user2.id,
    product_id: prod7.id)

review26 = Review.create(
    body: "Perfect Christmas Present- love them!!!!",
    rating: 5,
    user_id: user3.id,
    product_id: prod7.id)

review27 = Review.create(
    body: "This is my third pair of these. There really different looking and fit perfect. Love them",
    rating: 5,
    user_id: user4.id,
    product_id: prod7.id)

review28 = Review.create(
    body: "I lovd this! I was surprised/ worried at first at how it fit on my ear but I realized I hadn't pushed it far enough in. When I did it right it fit nicely and looks so cute! Love it",
    rating: 5,
    user_id: user5.id,
    product_id: prod7.id)

review29 = Review.create(
    body: "My friend absolutely loves this bar kit! Every piece fits perfect in the display stand and really adds that finished look to his new bar.",
    rating: 5,
    user_id: user2.id,
    product_id: prod8.id)

review30 = Review.create(
    body: "I got this for my Dad for his birthday and he absolutely loves it. The stand is a beautiful dark color and it is great for keeping all of the barware organized. I love that it comes with a variety of items for all types of drink mixing!",
    rating: 5,
    user_id: user3.id,
    product_id: prod8.id)

review31 = Review.create(
    body: "Super fast shipping! Nice packaging! The wooden piece so so beautiful and professional and the pieces are very high quality! Love it!",
    rating: 5,
    user_id: user4.id,
    product_id: prod8.id)

review32 = Review.create(
    body: "My boyfriend absolutely loves this gift. It is so easy to keep everything together now. The appliances are also very high quality. Thank you!!",
    rating: 5,
    user_id: user5.id,
    product_id: prod8.id)

review33 = Review.create(
    body: "Obsessed with this scarf!!! I would totally buy another one if they weren't so expensive. Love it.",
    rating: 5,
    user_id: user2.id,
    product_id: prod9.id)

review34 = Review.create(
    body: "J’adore mon écharpe- je la quitte plus. Merci et joyeux Noël",
    rating: 5,
    user_id: user3.id,
    product_id: prod9.id)

review35 = Review.create(
    body: "Love! Love! Love this scarf! It's huge but it keeps me so warm. I want one in every color!!",
    rating: 5,
    user_id: user4.id,
    product_id: prod9.id)

review36 = Review.create(
    body: "My absolute favorite scarf. Such a lovely color and SO SO warm!! I get compliments on it every time I wear it (which is pretty much every day, at this point). Thank you so much!",
    rating: 5,
    user_id: user5.id,
    product_id: prod9.id)

review37 = Review.create(
    body: "Happy to support American Small Business. I just had to test them out as soon as they arrived. They work really well. These gardening tools look fantastic and feel good in the hands.",
    rating: 5,
    user_id: user2.id,
    product_id: prod10.id)

review38 = Review.create(
    body: "Beautiful and gorgeous garden tools. I wasn’t planning on spending this much but wanted to find something made in the USA and I was set when I found these.",
    rating: 5,
    user_id: user3.id,
    product_id: prod10.id)

review39 = Review.create(
    body: "The folks at Fisher Blacksmithing are amazing. I asked if they could try to get a set of garden tools to my daughter in Michigan in time for her birthday and they did it! I did not really expect that",
    rating: 5,
    user_id: user4.id,
    product_id: prod10.id)

review40 = Review.create(
    body: "The recipient (it was a Christmas gift) was absolutely delighted! She's a landscape architect, and said she's saving them for her personal use in her home garden ONLY! Too nice to risk otherwise!",
    rating: 5,
    user_id: user5.id,
    product_id: prod10.id)

review41 = Review.create(
    body: "Very well made candle and so cute! I love the amber glass and the smell. Shipped fast too!",
    rating: 5,
    user_id: user2.id,
    product_id: prod11.id)

review42 = Review.create(
    body: "Packaged beautifully, with a great message of positive vibes, which made me full happy!",
    rating: 5,
    user_id: user3.id,
    product_id: prod11.id)

review43 = Review.create(
    body: "I love this candle, it's subtle at first but it only took 20 minutes to fill the room with fall smells!",
    rating: 5,
    user_id: user4.id,
    product_id: prod11.id)

review44 = Review.create(
    body: "I am so impressed with the quality of this product! The packaging for shipping was great as well. Will buy again!",
    rating: 5,
    user_id: user5.id,
    product_id: prod11.id)

review45 = Review.create(
    body: "These shelves were exactly what I was looking for! They don’t hold a ton, but I used them to add something a little different to a gallery wall of pictures and it works great. I am likely to buy more in the future for different spots around the house :)",
    rating: 5,
    user_id: user2.id,
    product_id: prod12.id)

review46 = Review.create(
    body: "LOVE theses shelves! Was just the thing I needed to spice up my room. I ended up using command hooks to hang them up just because I’m renting an apartment and didn’t want to dig a hole in the wall.",
    rating: 5,
    user_id: user3.id,
    product_id: prod12.id)

review47 = Review.create(
    body: "The cutest shelves!! They home some little plants in our house!! Plus the customer service was amazing!!:)",
    rating: 5,
    user_id: user4.id,
    product_id: prod12.id)

review48 = Review.create(
    body: "i am so happy with the shelves, they arrived incredibly quickly and were so easy to hang, even for me. they definitely enhance my space, thanks so much!",
    rating: 5,
    user_id: user5.id,
    product_id: prod12.id)

review49 = Review.create(
    body: "This chicken is super cute! Just as in the picture. I bought it for myself as a pick-me-up and it makes me smile every time I see it. It shipped really quickly and was very well packaged.",
    rating: 5,
    user_id: user2.id,
    product_id: prod13.id)

review50 = Review.create(
    body: "They look so much better in person. Super colorful and fun!",
    rating: 5,
    user_id: user3.id,
    product_id: prod13.id)

review51 = Review.create(
    body: "This is a darling and very colorful rooster. I have added him and his brother to my rooster and hen collection and they really stand out because of their brightness.",
    rating: 5,
    user_id: user4.id,
    product_id: prod13.id)

review52 = Review.create(
    body: "This chicken is so cute. I love it, and so does my husband. I think he was particularly enamored by the fact that it came from Israel. ",
    rating: 5,
    user_id: user5.id,
    product_id: prod13.id)

review53 = Review.create(
    body: "I absolutely LOVE it! This shop was so quick and very nice! I will definitely be ordering again... probably within the next week to get more gifts for my family!",
    rating: 5,
    user_id: user2.id,
    product_id: prod14.id)

review54 = Review.create(
    body: "My husband liked the wallet! He always wanted one that was slim and not bulky so it definitely worked out perfect! I do wish I would have purchased a lighter color wallet so that the personalized text wouldn’t look so dark on the brown!",
    rating: 5,
    user_id: user3.id,
    product_id: prod14.id)

review55 = Review.create(
    body: "Crazy fast delivery!! I ordered it pretty late at night, was shipped the next day, got it the day after that! I thought 'No way can this be custom engraved, I must have messed up when ordering it' but Nope it was custom engraved exactly like I asked for!",
    rating: 5,
    user_id: user4.id,
    product_id: prod14.id)

review56 = Review.create(
    body: "These were amazing! Looked fantastic, exactly like the picture! It was customized and still sent out for shipping within 3 days I think! Perfect groomsmen gifts for our wedding",
    rating: 5,
    user_id: user5.id,
    product_id: prod14.id)

review57 = Review.create(
    body: "This bad is so much better than anticipated! My shoulder strap was broken upon arrival but it did not take away from the beauty and luxe feeling of the bag. Enough space and stays out on my shoulder.",
    rating: 5,
    user_id: user2.id,
    product_id: prod15.id)

review58 = Review.create(
    body: "Love love love this bag!! I got the large size, and it's perfect to carry all my work items through the week. This purse also feels very sturdy - thick cut leather, strong rivets. I think this purse will last me a very long time.",
    rating: 5,
    user_id: user3.id,
    product_id: prod15.id)

review59 = Review.create(
    body: "I purchased the Large tote with everything included. I am so pleased with this purchase! I had questions about the processing and shipping time and the owner was incredibly helpful",
    rating: 5,
    user_id: user4.id,
    product_id: prod15.id)

review60 = Review.create(
    body: "Super impressed with the craftsmanship of this bag! Beautiful rich color! Amazing detail and stitching! The monogram was a beautiful personalized touch! Shipping took a little while, but worth the wait!",
    rating: 5,
    user_id: user5.id,
    product_id: prod15.id)

review61 = Review.create(
    body: "Fabulous customer service! These mugs were a gift for my soon to be sister in law and I was so upset when the post office messed up the delivery!",
    rating: 5,
    user_id: user2.id,
    product_id: prod16.id)

review62 = Review.create(
    body: "We absolutely love our mugs!! They are beautiful.",
    rating: 5,
    user_id: user3.id,
    product_id: prod16.id)

review63 = Review.create(
    body: "These are so cute and well made. These came wrapped so good that there was no way anything was going to break. Thank you so much. Fast shipping as well:)",
    rating: 5,
    user_id: user4.id,
    product_id: prod16.id)

review64 = Review.create(
    body: "The seller was super accommodating and sweet when I asked for some customization to the mugs I got. I was super happy with the quality of the mugs as well. I can’t wait to use them!",
    rating: 5,
    user_id: user5.id,
    product_id: prod16.id)

review65 = Review.create(
    body: "The package came very fast as I was surprising my SO with this gift. He loves to sketch and was so excited! The Rustic Brown colorway is amazing.",
    rating: 5,
    user_id: user2.id,
    product_id: prod17.id)

review66 = Review.create(
    body: "I am so impressed by Ox and Pine for their quality work on this journal! Even the packaging inside a canvas bag for protection was just so heartfelt. The leather is 100% genuine, soft, true to color, and smells amazing!",
    rating: 5,
    user_id: user3.id,
    product_id: prod17.id)

review67 = Review.create(
    body: "Seriously outweighed my expectations! The journal was gorgeous, the leather is so soft. I’m stoked to give this as a birthday gift!",
    rating: 5,
    user_id: user4.id,
    product_id: prod17.id)

review68 = Review.create(
    body: "Absolutely love this purchase. I didn't know what to expect honestly. Read the reviews and was super excited about the possibilities. I love the packed presentation.",
    rating: 5,
    user_id: user5.id,
    product_id: prod17.id)

review69 = Review.create(
    body: "The seller was extremely helpful when I made a mistake on my order and asked to have it shipped somewhere else as a gift. They mailed it out so quick! The turn around time was amazing.",
    rating: 5,
    user_id: user2.id,
    product_id: prod18.id)

review70 = Review.create(
    body: "Fast, nice, decent price, quick delivery.",
    rating: 5,
    user_id: user3.id,
    product_id: prod18.id)

review71 = Review.create(
    body: "So excited to use these, thanks for the super quick shipping!! :)",
    rating: 5,
    user_id: user4.id,
    product_id: prod18.id)

review72 = Review.create(
    body: "Very satisfied as expected. They are for my daughter and she love them. Definitely purchasing more from Etsy.",
    rating: 5,
    user_id: user5.id,
    product_id: prod18.id)

review73 = Review.create(
    body: "This is such a beautiful clock. For a wall in our kitchen, my husband wanted a clock and I wanted a work of art. We both got our way. Everyone who comes to our home comments on it.",
    rating: 5,
    user_id: user2.id,
    product_id: prod19.id)

review74 = Review.create(
    body: "Excellent customer service. Quick replies. Quick shipping. I can’t say enough good things about my buying experience! Love the clock! It’s perfect in my kitchen.",
    rating: 5,
    user_id: user3.id,
    product_id: prod19.id)

review75 = Review.create(
    body: "Beautiful clock. Simple, yet works for any space. Modern, minimalist, contermporary, etc. I also received it 6 days after I placed my intital order, so bonus points for that.",
    rating: 5,
    user_id: user4.id,
    product_id: prod19.id)

review76 = Review.create(
    body: "Super quiet and exactly as pictured. We love it very much!",
    rating: 5,
    user_id: user5.id,
    product_id: prod19.id)

review77 = Review.create(
    body: "I love this bracelet so much! It is such great quality, I wear it every day and never take it off. It is still in the same condition as the day it was shipped to me. It’s so unique. I get many compliments.",
    rating: 5,
    user_id: user2.id,
    product_id: prod20.id)

review78 = Review.create(
    body: "In love. So dainty and beautiful, perfect size.",
    rating: 5,
    user_id: user3.id,
    product_id: prod20.id)

review79 = Review.create(
    body: "I ordered this as a birthday present for my sister-in-law and the letters I chose were in tribute to her late father. She cried when she got this bracelet and hasn't taken it off since it was delivered.",
    rating: 5,
    user_id: user4.id,
    product_id: prod20.id)

review80 = Review.create(
    body: "This is my second order from this company and they’re just amazing!!",
    rating: 5,
    user_id: user5.id,
    product_id: prod20.id)



    
    # categories=[
    #     "Jewelry & Accessories",
    #     "Clothing & Shoes",
    #     "Home & Living",
    #     "Wedding & Party",
    #     "Toys & Entertainment",
    #     "Art & Collectibles",
    #     "Craft Supplies",
    #     "Gifts"
    # ]
    
    # categories.(1..9).each do |i|
    #     category = Category.new(name:categories[i-1])
    #     category.save!
    # end