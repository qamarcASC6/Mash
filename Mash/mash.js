// Verison 1

function mash (){
    return("house");
}

// Verison 2
function getHome(){
 let house = ["in a mansion", "in a garbage can", "in a apartment","in a shack", "in a house", "on the moon", "... YEET YOU AINT GOT NO HOUSE", "in the streets", "in your moms basement", "in the subway", "you live in your car"];
 if(process.argv.length<5){
    return house[Math.floor(Math.random()*house.length)];
        }
    else{
     house.push (process.argv[2]);
     }
 
return house[Math.floor(Math.random()*house.length)]; 
}
 // Verison 3 
 function getChildrenCount (){

    if (Math.random()>0.5){
        return Math.floor(Math.random()*101);
    }
    else if(process.argv.length<5){
        return Math.floor(Math.random()*101);
    }
    else{
       return process.argv[3];
    }
 }
function getCar(){
    let car = [ "..YEET NO CAR YOU WALKIN!!!", "Lambo", "BMW", "Delorean", "Minicooper", "Bike", "Flintstones car", "Rikshaw", "Heelys", "Cup"];
    if(process.argv.length<5){
return car[Math.floor(Math.random()*car.length)];
    }
else{
 car.push (process.argv[4]);
 }
 
}       



function name(){
    
    let PlayerName = ["Moon", "Sidney", "Jamal", "MoMo", "Steve", "Mo", "Ahmed", "Chris","Chris T.", "Zach", "Marcus", "Axel", "Brian", "Swp", "Zhul", "Joel", "Labeeb", "Tre", "Nathaniel", "Fillip", "Kevin", "Joe", "Max", "Jaylen", "Cavin", "Cameron"," Jaden", "Micheal", "Marvins", "Jen", " Ashley", "Fatima", "Fish", "Itzel", "Nadeen", "Nooria" , "Ania"];
    return PlayerName[Math.floor(Math.random()*PlayerName.length)];
}

function getSpouse(){
    let spouse=["Toph","Dexter's mom","one of the airbuds","A StopMotionVideo creator"]
    if(process.argv.length<9){
 
    }
    else{
        spouse.push (process.argv[5]);
      }
    return spouse[Math.floor(Math.random()*spouse.length)];
 }
 
 function getSalaryCount (){
 
    if (Math.random()>0.5){
        return Math.floor(Math.random()*100000);
    }
    else if(process.argv.length<9){
        return Math.floor(Math.random()*100000);
    }
    else{
       return process.argv[6];
    }
 }
 
 
 function getAgeCount (){
 
    if (Math.random()>0.5){
        return Math.floor(Math.random()*101);
    }
    else if(process.argv.length<9){
        return Math.floor(Math.random()*101);
    }
    else{
       return process.argv[7];
    }
 }
 
 function getCareer(){
    let career=["WeWork employee","as the person who puts the velcro on computer chargers","shoe shiner","StopMotionVideo creator", "Professional Idoit",]
    if(process.argv.length<9){
 
    }
    else{
        career.push (process.argv[8]);
      }
    return career[Math.floor(Math.random()*career.length)];
 }


 function MASH (){
    return "Your name is " + name() + ", you will live " + getHome() +", you will have " + getChildrenCount() + " kids, you will drive a "+ getCar() + ". You will be married to "+ getSpouse() + " and will die at the ripe age of "+ getAgeCount()+ ". You will annually make "+ getSalaryCount() + " as a "+ getCareer()+".";
 }
 
 console.log (MASH());













// //function getRandomInt(maxInt) {
//   //  return Math.floor(Math.random() * Math.floor(maxInt));
//  //}
//  //function randItemOfList(listName){
//     return (listName[Math.floor(Math.random() * listName.length - 1) + 1]);
//  }
//  function inputName(){
//     return ("Your name is " + process.argv[2]);
//  }
//  function fiftyChance(){
//     if (getRandomInt(100) >= 50){
//        return (hair[0]);
//     }
//     else
//         return (hair[1]);
 
//  }
 
//  //let Users = ["Urman", "arqkk", "Dividing", "PotRefill", "Edsby", "Landen", "Vexin", "Evilrare", "Grayers", "Chimpys"];
//  let Abilities = ["flight", "xray Vision", "no Vision", "invisibility", "super Strength", "super Speed", "super Sped", "no special pwoer"];
//  let Jobs = ["Teacher", "Assasin", "Bouncer", "jobless", "Garbage Man", "Professional Gamer", "Scientist", "Pizza maker", "Youtuber"];
//  let homes = ["a condo", "a mansion", "a home", "the outback", "a cardbaord box", "the street"];
//  let Location = ["Europe", "Alaska", "North America", "South America", "Antartica", "Africa", "Asia", "Austrailia", " the ocean", "the bermuda triangle"];
//  let income = ["below minimun wage", getRandomInt(80) +" an hour"];
//  let hair = ["you have hair", "you do not have hair"];
 
 
//  console.log( inputName() + " and you are a " + randItemOfList(Jobs) + " who lives in " + randItemOfList(homes) + " in " + randItemOfList(Location) + " and you make " + randItemOfList(income) + ". The Gods have given you  " + randItemOfList(Abilities) + ".");
//  console.log("Oh yea... and " + fiftyChance())
 
 
 
//  // console.log("Welcome to Axel's mash game! In this version in the game you will be providing the people, Abilities, jobs, homes, and location of homes (EX: Europe), we will be providing their income");
//  // let users = []
//  // let abilities = []
//  // let jobs = []
//  // let homes = []
//  // let location = []
//  // let income = ["below minimun wage", getRandomInt(80) +" an hour"];