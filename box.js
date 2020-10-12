class Box{
    constructor(x, y, width, height) {
        var options ={
            isStatic: false,
            restitution:0.8,
            friction:1,
            density:1
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }

      score(){
        if(this.visibility < 0 && this.visibility >= 105){
          score++
        }
      }

      display(){
        
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      } else{
        World.remove(world, this.body);
        push();
        //tint(255,this.visibility);
        this.visibility = this.visibility -5;
        pop();
        
      }
      }
}