class LandingBox{
  constructor(x, y, w, h, color, obj) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.obj = obj;
  }
  
  show(){
    this.obj.push();
    //this.obj.noStroke();
    //this.obj.fill(this.color);
    //this.obj.rect(this.x, this.y, this.w, this.h);
    
    this.obj.stroke(this.color);
    scribble.scribbleFilling( [this.x+80, this.x, this.x, this.x+80], [this.y+130, this.y+130, this.y-5, this.y-5], gap, angleScribble);
    scribble.scribbleRect( this.x+40, this.y+65, this.w, this.h );
    
    this.obj.pop();
  }
}
