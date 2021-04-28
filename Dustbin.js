class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        this.image = loadImage("dustbin.png");

        World.add(world,this.body);
    }
    display(){
        push ()
        translate (this.x,this.y+10)
        imageMode(CENTER);
        angleMode(RADIANS);
        //fill ('white');
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        image (this.image,0,-this.height/2,this.width*10,this.height*2);
        pop ()
    }
  
}