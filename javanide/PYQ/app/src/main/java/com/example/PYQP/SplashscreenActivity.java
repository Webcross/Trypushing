package com.example.PYQP;

import android.app.Activity; 

import android.content.Intent; 
import android.os.Bundle; 
import android.os.Handler; 
 import com.example.PYQP.R;
 
public class SplashscreenActivity 
extends Activity { 
    Handler handler; 
 
    protected void onCreate(Bundle bundle) { 
        super.onCreate(bundle); 
        this.setContentView(R.layout.splash_main); 
        this.handler = new Handler(); 
        this.handler.postDelayed(new Runnable(){ 
 
            public void run() { 
                Intent intent = new Intent(SplashscreenActivity.this, MainActivity.class);
      startActivity(intent);
            } 
        }, 2050); 
    } 
 
} 
 
 