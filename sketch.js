var peopleCount = 0;
var database;

function setup() {
    canvas = createCanvas(1800, 1800);
    database = firebase.database();
    form = new Form()    
    user = new User();
    user.getCount();
}

function draw(){
  background("lawngreen")
    form.display();
}