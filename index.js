import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("index.ejs");

});



app.get("/war", async (req,res) =>{
    try {
        const response1 = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const response2 = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        
        res.render("war.ejs",{
            player1: response1.data.deck_id,
            player2: response2.data.deck_id
        });
    } catch (error) {
        console.error('Error creating deck:', error);
        
    }
    
})

app.get("/solitaire",(req,res) => {
    res.render("solitaire.ejs");
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });