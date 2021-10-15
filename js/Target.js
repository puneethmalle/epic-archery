class Target{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("./assets/board.png");

        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     push();
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);   
     pop();
    }

}
