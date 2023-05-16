const websiteData = {
    "title": "Daren's Delicious Deserts",
    "logo": "#",
    "mainColor": "#ADEEE3",
    "secondaryColor": "#FFE74C",
    "thirdColor": "#454372",
    "fourthColor": "#CA6680",
    "fifthColor": "FF934F",
    "description": "A bakery website for Daren's Delicious Deserts. It allows people to view the bakeries menu add Items to a cart and purchase the items in the cart.",
    "Menu": [
        {
            "name": "Molten Lava Chocolate Cake",
            "description": "A delicious chocolate cake with a molten chocolate core. When it is cut the molten center flows out and over the cake.",
            "price": 5.00,
            "unit": "1 Cake",
            "image":
            {
                "src": "#",
                "alt": "Molten lava cake uncut."
            },
            "id":1
        },
        {
            "name": "Pecan Meltaways",
            "description": "With a mellow nutty flavor, this simple but elegant treat is a great snack for all occasions. These Pecan-Meltaways will make a wonderful addition to anyone's day.",
            "price": 5.00,
            "image":
            {
                "src": "#",
                "alt": "Molten lava cake uncut."
            },
            "id": 2
        }
        ,
        {
            "name": "Blueberry-Lemon Cheesecake",
            "description": "Its fruity. Its creamy. And its, well, Cheesecake! This wonderfully creamy blueberry-lemon cheesecake is not just pretty, but tastes oh, so good!",
            "price": 35.00,
            "unit": "8 Inch",
            "image":
            {
                "src": "#",
                "alt": "Molten lava cake uncut."
            },
            "id": 3
        }
        
    ]
}
function getWebsiteData() {
    return websiteData
}
module.exports = { getWebsiteData }