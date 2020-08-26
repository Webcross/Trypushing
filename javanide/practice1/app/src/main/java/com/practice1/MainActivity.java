package com.practice1;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Build;
import android.os.Bundle;
import android.view.Window;
import android.widget.Toast;
import android.view.WindowManager;
import android.graphics.Color;
import com.practice1.R;


public class MainActivity extends Activity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
this.requestWindowFeature(Window.FEATURE_NO_TITLE);       
             
    if (Build.VERSION.SDK_INT >=21) {
               Window w = getWindow();
    w.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    w.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
w.setStatusBarColor(Color.parseColor("#8934eb"));
//w.setNavigationBarColor(Color.parseColor("#8934eb"));
//w.getDecorView().setBackgroundColor(Color.parseColor("#8934eb"));
  }

setContentView(R.layout.activity_main);
 
}


        @Override
        
      public void onBackPressed()
      {
        AlertDialog.Builder builder=new AlertDialog.Builder(this);
 builder.setMessage("Are you sure to exit?")
        .setCancelable(true)
        .setPositiveButton("Yes",new DialogInterface.OnClickListener(){
        @Override
          public void onClick(DialogInterface arg0,int arg1)
          {
            finish();
          }
        })
        .setNegativeButton("No",null);
      AlertDialog alert=builder.create();
        alert.show();
    alert.getButton(AlertDialog.BUTTON_NEGATIVE).setTextColor(Color.parseColor("#FF0000" ));
    alert.getButton(AlertDialog.BUTTON_POSITIVE).setTextColor(Color.parseColor("#008000" ));
    
    
    }
    
}






