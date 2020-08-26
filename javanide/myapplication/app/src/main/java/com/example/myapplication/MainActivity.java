package com.example.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.Toast;
import com.example.myapplication.R;


public class MainActivity extends Activity {
  RelativeLayout varLayout;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
  varLayout = findViewById(R.id.funfactLayout);
      Button button = new Button(this);
      button.setText("Dynamically created Button");
      button.setLayoutParams(new
         RelativeLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,
         ViewGroup.LayoutParams.WRAP_CONTENT));
      button.setOnClickListener(new View.OnClickListener() {
         @Override
         public void onClick(View v) {
            Toast.makeText(MainActivity.this, "This button is created dynamically",
               Toast.LENGTH_SHORT).show();
    }

});

if (varLayout!= null){
         varLayout.addView(button);
         
      }
   }
}
