const express = require('express')
const app = express()
const cors = require("cors")
const {request} = require('http')
const nodemon = require('nodemon')
const PORT = 9000

app.use(cors())




const menuItems = [ {
    "char_id": 1,
    "itemName": "Pork Belly Noodle Bowl",
    "price": "$24.00",
    "img": "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/cd/03/93/pork-belly-noodle-bowl.jpg",
    "ingredients": "Noodles, Pork Belly, Broth",
    "allergens": "gluten, eggs, soy",
},
{
    "char_id": 2,
    "itemName": "Asian-marinated Airline Chicken",
    "price": "$24.00",
    "img": "https://media.wdwnt.com/2019/10/new-kona-cafe-menu-sticky-wings-airplane-chicken-polynesian-resort_17-1200x675.jpg",
    "ingredients": "Sticky Rice, Bok Choy, Asian Glaze",
    "allergens": "dairy, soy",
},
{
    "char_id": 3,
    "itemName": "Turkey Banh Mi",
    "price": "$18.00",
    "img": "https://i1.wp.com/www.wdwopinion.com/wp-content/uploads/2020/01/IMG_8386-scaled.jpg?fit=1024%2C768&ssl=1",
    "ingredients": "Slow-roasted Turkey Breast, Black Pepper Bacon, Pork Pâte, Cilantro, Jalapeño, Onions, and Grilled Poblano Mayonnaise served with French Fries",
    "allergens": "gluten, dairy",
},
]

app.get('/api/menuItems', (req,res) => {
    res.json(menuItems)
})
app.get('/api' , (req, res)=>{ 
    res.json(menuItems)
})

app.get('/api/menuItems/:id', (req, res) => {
    const searchedArray = []
    menuItems.forEach(el => {
    if(el.itemName.toLowerCase().includes(req.params.id.toLowerCase())){
        searchedArray.push(el)
    }
})
res.json(searchedArray)
})

app.listen( process.env.PORT || PORT, () => {
    console.log(`Server is runnning on ${PORT}`)
    
})




