package com.zameen;

import com.facebook.react.ReactActivity;

 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
 import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // here
import com.facebook.react.modules.i18nmanager.I18nUtil;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Zameen";
    }
    @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
      @Override
   protected void onCreate(Bundle savedInstanceState) {
       SplashScreen.show(MainActivity.this);  // here
       super.onCreate(savedInstanceState);
       I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
       sharedI18nUtilInstance.allowRTL(MainActivity.this, true);
      
   }
   // ...other code
  };
  
}

}