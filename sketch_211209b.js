var LinePoints=[];
var dotsn=10;
var  padding =50;
var size;
 var colors = [];

function setup() {
noLoop();
createCanvas(800,800);
background(250);
colors = [color("#010440"),color("#fffff1"),color("#fffff3"),color("#4465A6"),color("#2D7359"),color("#F2B33D"),color("#F25749")];
}


function draw() {
 size = (width-(padding*2))/dotsn;
  createPoints();
  drawLines();
  stroke(colors[0]);
  strokeWeight(2);
  
   //save("SVG_triangles.svg");
}

function createPoints()
{
 
  
  for(var i = padding; i<height-padding; i+=size)
  {
    var line = [];
    for(var j = padding; j<width-padding; j+=size)
    {
     
      var point;
      var varianceX = Math.random()* 2 * size/2 ;//(Math.random()*2);
      var varianceY =Math.random()*2 * size/2;
     if(((i-padding)/size)%2==0)
     {
        point = {x:j+size/2+varianceX, y:i+varianceY};
     }
     else
     {
        point = {x:j+varianceX, y:i+varianceY};
     }
      
      line.push(point);
    }
    LinePoints.push(line);
  }
  
  //print(LinePoints);
  
}


function drawLines()
{

  
 
  for(var k=0; k<LinePoints.length;k++)
  {
    for(var l =0; l<LinePoints[k].length-1; l++)
    {
      //print(k);
      if(k%2==0 )
      { 
     
      fill(colors[Math.floor(Math.random()*colors.length)]);
      beginShape();
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      vertex(LinePoints[k][l+1].x, LinePoints[k][l+1].y );
      vertex(LinePoints[k+1][l+1].x, LinePoints[k+1][l+1].y );
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      endShape();
      
      
      
      if(k!=0)
      {
        fill(colors[Math.floor(Math.random()*colors.length)]);
      beginShape();
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      vertex(LinePoints[k][l+1].x, LinePoints[k][l+1].y );
      vertex(LinePoints[k-1][l+1].x, LinePoints[k-1][l+1].y );
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      endShape();
      }
      
      }
      
      else
      { if(k!=9)
      {
          fill(colors[Math.floor(Math.random()*colors.length)]);
      beginShape();
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      vertex(LinePoints[k][l+1].x, LinePoints[k][l+1].y );
      vertex(LinePoints[k+1][l].x, LinePoints[k+1][l].y );
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      endShape();
      }
    
      
      fill(colors[Math.floor(Math.random()*colors.length)]);
      beginShape();
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      vertex(LinePoints[k][l+1].x, LinePoints[k][l+1].y );
      vertex(LinePoints[k-1][l].x, LinePoints[k-1][l].y );
      vertex(LinePoints[k][l].x, LinePoints[k][l].y );
      endShape();
      }
    }
  }
  
  
   
  
}
