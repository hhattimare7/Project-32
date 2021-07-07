class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    this.visiblity = 255;
  }

  display(){
    var pos =this.body.position;

    if(this.body.speed<5){
      push();
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }else{
      
      push();
      this.visiblity = this.visiblity - 25;
      tint(255,this.visiblity);
      rect(pos.x, pos.y, this.width, this.height);
    
      World.remove(world,this.body);
      pop();
    }
    console.log(this.visiblity);

  }

};
