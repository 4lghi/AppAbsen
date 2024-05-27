import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

const ListWajahPerOrang = () => {
  return (
    <View>
        <Menu desc="aji"></Menu>
        <Menu desc="sidiq"/>
        <Menu desc="pian"/>
    </View>
  )
}


const Menu = ({desc}) => {
    return (
      <View>
        <View style={styles.containerMenu}>
          <Text style={styles.descMenu}>{desc}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    containerMenu: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      height: 125,
      backgroundColor: '#dda15e',
      marginBottom: 15,
      marginHorizontal: 10,
      borderRadius: 20,
    },
    descMenu: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  });

export default ListWajahPerOrang
