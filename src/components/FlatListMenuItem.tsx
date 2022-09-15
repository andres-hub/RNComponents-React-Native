import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuItem } from '../interfaces/appInterfaces';

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5}
        >
         <View style={styles.container}>
            <Icon 
                name={menuItem.icon}
                color='grey'
                size={23}
            />
          <Text style={styles.itemText}>
            {menuItem.name}
          </Text>
          <View style={{flex:1}} />
          <Icon 
                name='chevron-forward-outline'
                color='grey'
                size={23}
            />
        </View>
        </TouchableOpacity>  
      )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{
        color: 'black',
        marginLeft:10,
        fontSize:19
    }
});
