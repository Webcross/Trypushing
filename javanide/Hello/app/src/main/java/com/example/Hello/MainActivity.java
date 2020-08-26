package com.example.Hello;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;
import android.widget.Button;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.view.View;

import com.example.Hello.R;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState); this.requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main);
 Button b= findViewById(R.id.notifi);
 b.setOnClickListener(new View.OnClickListener(){
   @Override
   public void onClick(View v)
   {
     startNotify();
   }
   
 });
}
 
 private  void startNotify()
 {
   Notification.Builder builder= new Notification.Builder(this);
   builder.setContentTitle("Notify");
   builder.setContentText("My first Notification");
   
   NotificationManager manager = (NotificationManager)getSystemService(Context.NOTIFICATION_SERVICE);
      manager.notify(0, builder.build());
   }
   
}
