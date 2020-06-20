
const type=["archer","axeman","swordman"];

const images = [
"https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_100,f_auto,fl_lossy,w_640,c_limit/cdn/6da3cada-4837-4be8-bac7-442de02060e7/5743403f-1b5c-4fa0-bd92-7300eb09c29c.jpg",
"https://www.wonderslist.com/wp-content/uploads/2014/08/Lara-Croft-Tomb-Raider.jpg",
"https://allthingsdantastic.files.wordpress.com/2015/03/img_9961.jpg?w=376",
"https://api.time.com/wp-content/uploads/2017/06/pikachu-most-influential-game-characters.jpg?w=720"
]

//make object of warrior
function gameWarriors(){
   
     const warrior={
        power:_getPower(),
        level:_getLevel(),
        type:_getType(),
        image:_getImage()
    }

    

   function _getPower(){
       return Math.floor(Math.random() *100) +1;
   }
   
   function _getLevel(){
       return Math.floor(Math.random() * 10)+ 1;
   }

   function _getType(){
       return type[Math.floor(Math.random()*3)];
   }

   function _getImage(){
    return images[Math.floor(Math.random()*4)];
   }

   warrior.demage = warrior.level * warrior.power;
   return warrior;
}

//make charecter in the DOM
function drawInCard(warrior)
{
    if(typeof warrior !== "object") return
    const c_card =document.createElement("div");
    c_card.className="card"
    const c_cardImage =document.createElement("img")
    c_cardImage.style.height ="200px";
    c_cardImage.style.width ="200px";
    c_cardImage.className ="card-img-top"
    c_cardImage.src =warrior.image;
    const c_power =document.createElement("p");
    c_power.textContent =`power: ${warrior.power}`;
    const c_level =document.createElement("p");
    c_level.textContent = `level: ${warrior.level}`;
    const c_type = document.createElement("p");
    c_type.textContent =` type: ${warrior.type}`;
    c_card.append(c_cardImage,c_power,c_level,c_type)
    document.getElementById("cards_place_holder").appendChild(c_card);
}

const cherecter = gameWarriors()
drawInCard(cherecter)