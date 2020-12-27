class Ground extends BaseClass{
    constructor(x,y,width,height,color) {
      super(x,y,width,height,color);
      this.color = color;
    }
    
    display(){
      fill(this.color);
      super.display();
    }
  };
  