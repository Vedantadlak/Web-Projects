const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static(__dirname + "/assets"));

var contactlist = [
    {
        name: "Vedant",
        phone: "7000305702"
    },
    {
        name: "Shivansh",
        phone: "8319953878"
    },
    {
        name: "Mamta Adlak",
        phone: "9179953385"
    },
    {
        name: "Geeteshwar Adlak",
        phone: "9993151767"
    }
]



app.get('/', function (req, res) {

    Contact.find({}, function (err, contacts) {
        if (err){
            console.log('error in fetching contacts from db');
        
        return;
        }
    
    return res.render('home',
        {
            title: "My Contacts List",
            contact_list: contacts
        });
});
});

app.post('/create-contact', function (req, res) {
    // contactlist.push(req.body);
    Contact.create(req.body, function (err, newContact) {
        if (err) {
            console.log('error in creating a contact!');
            return
        };
        console.log('******', newContact);
        return res.redirect('back');
    });

});
app.get('/delete-contact/', function (req, res) {
 // let contactIndex = contactlist.findIndex(contact => contact.phone == phone);
    // if (contactIndex != -1) {
    //     contactlist.splice(contactIndex, 1);
    // }
    let id = req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting the contact!');
        }
    });
   
    return res.redirect('back');
});
app.get('/practise', function (req, res) {
    return res.render('practise',
        { title: "Let us play with ejs" });
});



app.listen(port, function (err) {
    if (err) {
        console.log('Error in running the server', err);
    }
    console.log('Yup!My Express Server is running on port:', port);
});
