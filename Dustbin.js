class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
			//restitution:0.3,
			//friction:0.5,
            //density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("Dustbin.png");
        World.add(world, this.body);
        }
        
        display(){

        var pos=this.body.position;
        rectMode(CENTER);
        fill(255)
        image(this.image,880,308,0,0);
	    //rect(pos.x,pos.y,this.width, this.height);
       
    }
}