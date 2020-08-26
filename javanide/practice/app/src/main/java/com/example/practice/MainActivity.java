package com.example.practice;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import com.example.practice.R;

public class MainActivity extends Activity {

    @Override
    public  void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
       AlertDialog.Builder builder1 = new AlertDialog.Builder(this);
builder1.setMessage("Write your message here.");
builder1.setCancelable(true);

builder1.setPositiveButton(
    "Yes",
    new DialogInterface.OnClickListener() {
        public void onClick(DialogInterface dialog, int id) {
            dialog.cancel();
        }
    });

builder1.setNegativeButton(
    "No",
    new DialogInterface.OnClickListener() {
        public void onClick(DialogInterface dialog, int id) {
            dialog.cancel();
        }
    });

AlertDialog alert11 = builder1.create();
alert11.show();

}

}