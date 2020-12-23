class Dustbin
{
 constructor()
 {
 var options=
 {
  isStatic:true
 }    

this.rec1 = Bodies.rectangle(310,630,15,75)
World.add(world,this.rec1) 
this.rec3 = Bodies.rectangle(490,630,15,75)
World.add(world,this.rec3)
this.rec2 = Bodies.rectangle(400,665,200,15)
World.add(world,this.rec2)
}

display()
{
 fill("red");

 rect(310,630,15,75)
 rect(490,630,15,75)
 rect(400,665,200,15)
}
}