import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { useAnimaation } from '../hooks/useAnimaation';

export const Animation101Screen = () => {

const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimaation();

  return (
    <View style={styles.containar}>
        <Animated.View style={{
          ...styles.purpleBox,  
          opacity,
          transform:[{
            translateY: position
          }]
        }} />

        <Button
          title='FadeIn'
          onPress={()=>{
            fadeIn(), 
            startMovingPosition(-300);
          }}
        />       
        <Button
          title='FadeoUT'
          onPress={fadeOut}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    containar:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }


});
