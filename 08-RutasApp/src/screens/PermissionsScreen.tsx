import React, { useContext } from 'react'
import { Text, View, StyleSheet, Button, AppState } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { useEffect } from 'react';

export const PermissionsScreen = () => {

    const {permissions,askLocationPermission} = useContext(PermissionsContext);
   
  return (
      <View style={styles.container}>
          <Text>Permissions Screen</Text>
          <Button
            title='Permiso'
            onPress={askLocationPermission}
          />

          <Text>
              {JSON.stringify(permissions,null,5)}
          </Text>
      </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});