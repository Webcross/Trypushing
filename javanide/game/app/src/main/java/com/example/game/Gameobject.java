package com.example.game;

import android.graphics.Bitmap;

public abstract class Gameobject {

protected Bitmap image;

protected final int rowCount;
protected final int colCount;

protected final int WIDTH;
protected final int HEIGHT;

protected final int width;
protected final int height;

protected int x;
protected int y;

public Gameobject(Bitmap image,int rowCount,int colCount,int x,int y)
{
  this.image=image;
  this.rowCount=rowCount;
  this.colCount=colCount;
  this.x=x;
  this.y=y;
  
  this.WIDTH=image.getWidth();
  this.HEIGHT=image.getHeight();
  
  this.width=WIDTH/colCount;
  this.height=HEIGHT/rowCount;
  
  }
  
protected Bitmap createSubImageAt(int x,int y)
{
     Bitmap subImage = Bitmap.createBitmap(image,x,y,width,height);
     return subImage;
  
}

public int getX()
{
  return this.x;
}

public int getY()
{
  return this.y;
}
public int getHeight() 
{
        return height;
}
 
    public int getWidth() 
 {
        return width;
 }

}
