class Rock {

    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 0.8,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("rock.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("yellow");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}