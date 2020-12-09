class Paper{
    constructor(x,y,radius){
        var options={
			isStatics:false,
			restitution:0.3,
			friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, 25, options)
        World.add(world, this.body);
    } 
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius)
        fill(255)
        pop();
    }
}