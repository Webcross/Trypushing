package com.example.PYQP;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.ProgressBar;
import com.example.PYQP.R;
import android.view.View;



public class Q10s1Activity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.q10s1_main);
WebView webview= findViewById(R.id.web1);
ProgressBar progress1= findViewById(R.id.prog1);
progress1.setVisibility(View.VISIBLE);

String furl="  https://drive.google.com/file/d/1-mYgXEUTEqzTeQkxGOYUt1yJjetn7KtB/view?usp=drivesdk";
webview.getSettings().setJavaScriptEnabled(true);
webview.getSettings().setBuiltInZoomControls(true);

webview.setWebChromeClient(new WebChromeClient(){
  
  @Override
  public void onProgressChanged(WebView view,int newProgress){
    
    super.onProgressChanged(view,newProgress);
  
  if(newProgress==100)
  {
    
    progress1.setVisibility(View.GONE);
    
    
  }
  
  }
  
  
});


webview.loadUrl(furl);
    }

}
