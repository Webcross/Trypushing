package com.example.drpdf;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.ProgressBar;
import com.example.drpdf.R;
import android.view.View;


public class SplashscreenActivity extends Activity {

    
    @Override
     protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        setContentView(R.layout.activity_main);
WebView webview= findViewById(R.id.web1);
		 
		 


String furl="  https://drive.google.com/file/d/1FxW092OEiTTvecvCDDkEn6fn5sy_gM1c/view?usp=drivesdk";
webview.getSettings().setJavaScriptEnabled(true);
webview.getSettings().setBuiltInZoomControls(true);

webview.setWebChromeClient(new WebChromeClient(){
  
  @Override
  public void onProgressChanged(WebView view,int newProgress){
    
    super.onProgressChanged(view,newProgress);
  
  if(newProgress==100)
  {
	  ProgressBar progress1= findViewById(R.id.prog1);
    System.out.println("Done");
	  progress1.setVisibility(View.GONE);
    
  }
  
  }
  
  
});


webview.loadUrl(furl);
    }

}
