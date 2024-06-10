const data = [
    {
        "id": 1,
        "name": "The Gourmet Bistro",
        "cuisine": "French",
        "location": "123 Main St, Paris, France",
        "rating": 4.8,
        "famous_dish": "Coq au Vin"
      },
      {
        "id": 2,
        "name": "Pasta Palace",
        "cuisine": "Italian",
        "location": "456 Olive St, Rome, Italy",
        "rating": 4.6,
        "famous_dish": "Spaghetti Carbonara"
      },
      {
        "id": 3,
        "name": "Sushi World",
        "cuisine": "Japanese",
        "location": "789 Sakura St, Tokyo, Japan",
        "rating": 4.9,
        "famous_dish": "Nigiri Sushi"
      },
      {
        "id": 4,
        "name": "Curry Delight",
        "cuisine": "Indian",
        "location": "101 Spice Rd, Mumbai, India",
        "rating": 4.7,
        "famous_dish": "Butter Chicken"
      },
      {
        "id": 5,
        "name": "Taco Fiesta",
        "cuisine": "Mexican",
        "location": "202 Cactus Ave, Mexico City, Mexico",
        "rating": 4.5,
        "famous_dish": "Tacos Al Pastor"
      },
      {
        "id": 6,
        "name": "Burger Haven",
        "cuisine": "American",
        "location": "303 Burger Ln, New York, USA",
        "rating": 4.4,
        "famous_dish": "Cheeseburger"
      },
      {
        "id": 7,
        "name": "Dragon's Wok",
        "cuisine": "Chinese",
        "location": "404 Dragon St, Beijing, China",
        "rating": 4.6,
        "famous_dish": "Peking Duck"
      },
      {
        "id": 8,
        "name": "Tapas Treat",
        "cuisine": "Spanish",
        "location": "505 Fiesta St, Barcelona, Spain",
        "rating": 4.7,
        "famous_dish": "Patatas Bravas"
      },
      {
        "id": 9,
        "name": "The Greek Taverna",
        "cuisine": "Greek",
        "location": "606 Olive Grove, Athens, Greece",
        "rating": 4.5,
        "famous_dish": "Moussaka"
      },
      {
        "id": 10,
        "name": "Lebanese Delights",
        "cuisine": "Lebanese",
        "location": "707 Cedar St, Beirut, Lebanon",
        "rating": 4.8,
        "famous_dish": "Falafel"
      },
      {
        "id": 11,
        "name": "Thai Spice",
        "cuisine": "Thai",
        "location": "808 Lemongrass St, Bangkok, Thailand",
        "rating": 4.9,
        "famous_dish": "Pad Thai"
      },
      {
        "id": 12,
        "name": "Vietnamese Pho",
        "cuisine": "Vietnamese",
        "location": "909 Noodle St, Hanoi, Vietnam",
        "rating": 4.7,
        "famous_dish": "Pho"
      },
      {
        "id": 13,
        "name": "Brazilian Grill",
        "cuisine": "Brazilian",
        "location": "1010 Carnival St, Rio de Janeiro, Brazil",
        "rating": 4.6,
        "famous_dish": "Feijoada"
      },
      {
        "id": 14,
        "name": "Argentinian Steakhouse",
        "cuisine": "Argentinian",
        "location": "1111 Tango St, Buenos Aires, Argentina",
        "rating": 4.8,
        "famous_dish": "Asado"
      },
      {
        "id": 15,
        "name": "Turkish Delight",
        "cuisine": "Turkish",
        "location": "1212 Bazaar St, Istanbul, Turkey",
        "rating": 4.7,
        "famous_dish": "Kebap"
      },
      {
        "id": 16,
        "name": "Moroccan Feast",
        "cuisine": "Moroccan",
        "location": "1313 Spice Market, Marrakech, Morocco",
        "rating": 4.6,
        "famous_dish": "Tagine"
      },
      {
        "id": 17,
        "name": "Peruvian Flavors",
        "cuisine": "Peruvian",
        "location": "1414 Andes St, Lima, Peru",
        "rating": 4.8,
        "famous_dish": "Ceviche"
      },
      {
        "id": 18,
        "name": "South African Braai",
        "cuisine": "South African",
        "location": "1515 Safari St, Cape Town, South Africa",
        "rating": 4.5,
        "famous_dish": "Braai"
      },
      {
        "id": 19,
        "name": "Australian BBQ",
        "cuisine": "Australian",
        "location": "1616 Outback St, Sydney, Australia",
        "rating": 4.7,
        "famous_dish": "Barbecued Snags"
      },
      {
        "id": 20,
        "name": "Russian Banquet",
        "cuisine": "Russian",
        "location": "1717 Red Square, Moscow, Russia",
        "rating": 4.6,
        "famous_dish": "Beef Stroganoff"
      },
      {
        "id": 21,
        "name": "Polish Pierogi",
        "cuisine": "Polish",
        "location": "1818 Market St, Warsaw, Poland",
        "rating": 4.5,
        "famous_dish": "Pierogi"
      },
      {
        "id": 22,
        "name": "Korean BBQ",
        "cuisine": "Korean",
        "location": "1919 Seoul St, Seoul, South Korea",
        "rating": 4.9,
        "famous_dish": "Bulgogi"
      },
      {
        "id": 23,
        "name": "German Biergarten",
        "cuisine": "German",
        "location": "2020 Beer St, Munich, Germany",
        "rating": 4.7,
        "famous_dish": "Bratwurst"
      },
      {
        "id": 24,
        "name": "Belgian Waffles",
        "cuisine": "Belgian",
        "location": "2121 Chocolate St, Brussels, Belgium",
        "rating": 4.8,
        "famous_dish": "Belgian Waffles"
      },
      {
        "id": 25,
        "name": "Swiss Fondue",
        "cuisine": "Swiss",
        "location": "2222 Alpine St, Zurich, Switzerland",
        "rating": 4.6,
        "famous_dish": "Cheese Fondue"
      },
      {
        "id": 26,
        "name": "Swedish Smorgasbord",
        "cuisine": "Swedish",
        "location": "2323 Baltic St, Stockholm, Sweden",
        "rating": 4.5,
        "famous_dish": "Gravlax"
      },
      {
        "id": 27,
        "name": "Norwegian Salmon",
        "cuisine": "Norwegian",
        "location": "2424 Fjord St, Oslo, Norway",
        "rating": 4.7,
        "famous_dish": "Smoked Salmon"
      },
      {
        "id": 28,
        "name": "Danish Pastry",
        "cuisine": "Danish",
        "location": "2525 Mermaid St, Copenhagen, Denmark",
        "rating": 4.8,
        "famous_dish": "Danish Pastry"
      },
      {
        "id": 29,
        "name": "Finnish Feast",
        "cuisine": "Finnish",
        "location": "2626 Sauna St, Helsinki, Finland",
        "rating": 4.6,
        "famous_dish": "Karjalanpiirakka"
      },
      {
        "id": 30,
        "name": "Icelandic Delicacies",
        "cuisine": "Icelandic",
        "location": "2727 Glacier St, Reykjavik, Iceland",
        "rating": 4.5,
        "famous_dish": "Skyr"
      },
      {
        "id": 31,
        "name": "Portuguese Flavors",
        "cuisine": "Portuguese",
        "location": "2828 Explorer St, Lisbon, Portugal",
        "rating": 4.7,
        "famous_dish": "Bacalhau"
      },
      {
        "id": 32,
        "name": "Dutch Treats",
        "cuisine": "Dutch",
        "location": "2929 Windmill St, Amsterdam, Netherlands",
        "rating": 4.6,
        "famous_dish": "Stroopwafel"
      },
      {
        "id": 33,
        "name": "Irish Pub",
        "cuisine": "Irish",
        "location": "3030 Clover St, Dublin, Ireland",
        "rating": 4.5,
        "famous_dish": "Irish Stew"
      },
      {
        "id": 34,
        "name": "Scottish Highlands",
        "cuisine": "Scottish",
        "location": "3131 Loch St, Edinburgh, Scotland",
        "rating": 4.7,
        "famous_dish": "Haggis"
      },
      {
        "id": 35,
        "name": "Welsh Cawl",
        "cuisine": "Welsh",
        "location": "3232 Castle St, Cardiff, Wales",
        "rating": 4.8,
        "famous_dish": "Cawl"
      },
      {
        "id": 36,
        "name": "Austrian Cafe",
        "cuisine": "Austrian",
        "location": "3333 Opera St, Vienna, Austria",
        "rating": 4.6,
        "famous_dish": "Sachertorte"
      },
      {
        "id": 37,
        "name": "Hungarian Feast",
        "cuisine": "Hungarian",
        "location": "3434 Danube St, Budapest, Hungary",
        "rating": 4.5,
        "famous_dish": "Goulash"
      },
      {
        "id": 38,
        "name": "Czech Delights",
        "cuisine": "Czech",
        "location": "3535 Castle St, Prague, Czech Republic",
        "rating": 4.7,
        "famous_dish": "Svíčková"
      },
      {
        "id": 39,
        "name": "Slovakian Sweets",
        "cuisine": "Slovakian",
        "location": "3636 Tatra St, Bratislava, Slovakia",
        "rating": 4.6,
        "famous_dish": "Halusky"
      },
      {
        "id": 40,
        "name": "Croatian Cuisine",
        "cuisine": "Croatian",
        "location": "3737 Adriatic St, Dubrovnik, Croatia",
        "rating": 4.5,
        "famous_dish": "Peka"
      },
      {
        "id": 41,
        "name": "Serbian Grill",
        "cuisine": "Serbian",
        "location": "3838 Balkan St, Belgrade, Serbia",
        "rating": 4.7,
        "famous_dish": "Ćevapi"
      },
      {
        "id": 42,
        "name": "Romanian Feast",
        "cuisine": "Romanian",
        "location": "3939 Dracula St, Bucharest, Romania",
        "rating": 4.6,
        "famous_dish": "Sarmale"
      },
      {
        "id": 43,
        "name": "Bulgarian Banquet",
        "cuisine": "Bulgarian",
        "location": "4040 Rose St, Sofia, Bulgaria",
        "rating": 4.5,
        "famous_dish": "Kavarma"
      },
      {
        "id": 44,
        "name": "Georgian Delights",
        "cuisine": "Georgian",
        "location": "4141 Tbilisi St, Tbilisi, Georgia",
        "rating": 4.8,
        "famous_dish": "Khachapuri"
      },
      {
        "id": 45,
        "name": "Ukrainian Feast",
        "cuisine": "Ukrainian",
        "location": "4242 Kiev St, Kyiv, Ukraine",
        "rating": 4.7,
        "famous_dish": "Borscht"
      },
      {
        "id": 46,
        "name": "Belarusian Banquet",
        "cuisine": "Belarusian",
        "location": "4343 Minsk St, Minsk, Belarus",
        "rating": 4.6,
        "famous_dish": "Draniki"
      },
      {
        "id": 47,
        "name": "Estonian Eats",
        "cuisine": "Estonian",
        "location": "4444 Baltic St, Tallinn, Estonia",
        "rating": 4.5,
        "famous_dish": "Verivorst"
      },
      {
        "id": 48,
        "name": "Latvian Larder",
        "cuisine": "Latvian",
        "location": "4545 Riga St, Riga, Latvia",
        "rating": 4.7,
        "famous_dish": "Rye Bread"
      },
      
]
export default data