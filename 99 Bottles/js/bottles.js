function beerBottles(){
    for (var bottles = 100; bottles > 1; bottles--){
    console.log (bottles +" bottles of beer on the wall. "+bottles+" bottles of beer." + "Take one down and pass it around, "+(bottles-1)+" bottles of beerr on the wall.");
    }
}

function bottleButton(){
    return(beerBottles());
}


