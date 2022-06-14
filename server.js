const express = require('express')
const app = express()
const cors = require("cors")
const {request} = require('http')
const nodemon = require('nodemon')
const PORT = 8000

app.use(cors())



const menuItems = { 
    "char_id":1,
    'porkBowl': {
    'itemName' : 'Pork Belly Noodle Bowl',
    'ingredients': 'Noodle, Pork Belly, Broth',
    'price':'$24.00',
    'img': 'https://media-cdn.tripadvisor.com/media/photo-m/1280/18/cd/03/93/pork-belly-noodle-bowl.jpg' ,
    
    
},   
    "char_id":2,    
    'airlineChick': {
    'itemName' : 'Asian-marinated Airline Chicken',
    'ingredients': 'Sticky Rice, Bok Choy, Asian Glaze',
    'price':'$24',
    'img': 'https://media.wdwnt.com/2019/10/new-kona-cafe-menu-sticky-wings-airplane-chicken-polynesian-resort_17-1200x675.jpg' ,
    

},   "char_id":3,
    'turkey': {
    'itemName' : 'Turkey Banh Mi',
    'ingredients': 'Slow-roasted Turkey Breast, Black Pepper Bacon, Pork Pâte, Cilantro, Jalapeño, Onions, and Grilled Poblano Mayonnaise served with French Fries',
    'price':'$18',
    'img': 'https://i1.wp.com/www.wdwopinion.com/wp-content/uploads/2020/01/IMG_8386-scaled.jpg?fit=1024%2C768&ssl=1' ,
    
},

}

app.get('/api/menuItems', (req,res) => {
    res.json(menuItems)
})





app.listen( process.env.PORT || PORT, () => {
    console.log(`Server is runnning on ${PORT}`)
})
//