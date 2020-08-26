package com.example.PYQP;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.ProgressBar;
import com.example.PYQP.R;
import android.view.View;



public class Q9s2Activity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.q9s2_main);
WebView webview= findViewById(R.id.web1);
ProgressBar progress1= findViewById(R.id.prog1);
progress1.setVisibility(View.VISIBLE);

String furl="  https://drive.google.com/file/d/1-UwOMNT2JKITDwdjq-xkrxGho6K8KTAK/view?usp=drivesdk";
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
