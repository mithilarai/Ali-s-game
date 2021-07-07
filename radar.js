class Radar{
    constructor(){
this.image = loadImage ("images/radar.png")
    }
    display(){
push()
imageMode(CENTER)
tint(255,100)
image(this.image,robot.x,robot.y,80,80)
pop()
    }
}