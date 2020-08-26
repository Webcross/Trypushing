package com.example.PYQP;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import android.content.Intent;

import com.example.PYQP.R;

public class Q19Activity extends Activity implements View.OnClickListener {
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.q19a_main);
 
        Button button1 = findViewById(R.id.button1);
        Button button2 = findViewById(R.id.button2);
        Button button3 = findViewById(R.id.button3);
        Button button4 = findViewById(R.id.button4);
        Button button5 = findViewById(R.id.button5);
        Button button6 = findViewById(R.id.button6);
        Button button7 = findViewById(R.id.button7);
 
        button1.setOnClickListener(this);
        button2.setOnClickListener(this);
        button3.setOnClickListener(this);
        button4.setOnClickListener(this);
        button5.setOnClickListener(this);
        button6.setOnClickListener(this);
        button7.setOnClickListener(this);
 
 
    }
 
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.button1:
                Intent intent = new Intent(this, Q8s1Activity.class);
      startActivity(intent);
                break;
            case R.id.button2:
                Intent intent1=new Intent(this,Q8s2Activity.class);
                startActivity(intent1);
                break;
            case R.id.button3:
                Intent intent2=new Intent(this,Q9s1Activity.class);
                startActivity(intent2);
                break;
            case R.id.button4:
                Intent intent3=new Intent(this,Q9s2Activity.class);
                startActivity(intent3);
                break;
            case R.id.button5:
                Intent intent4=new Intent(this,Q10s1Activity.class);
                startActivity(intent4);
                break;
                case R.id.button6:
                Intent intent5=new Intent(this,Q10s2Activity.class);
                startActivity(intent5);
                break;
            case R.id.button7:
                Toast.makeText(this, "Button 5 clicked", Toast.LENGTH_SHORT).show();
                break;
        }
    }
}