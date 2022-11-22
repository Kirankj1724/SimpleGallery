import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {

  useEffect(() => {

    checkPermissions()

  }, []);

  const checkPermissions = async() => {
    const hasPermissions = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

    console.log(hasPermissions, 'hasPermissions');

    if(hasPermissions){
      return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "Simple Gallery App Permissions",
      message: "Simple Gallery needs your permission to access the photos in this device.",
      buttonPositive: "Ok",
    })
    
    return status === 'granted';
  }

  return (
    <SafeAreaView>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
