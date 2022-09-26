import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimaation = () => {

    const opacity = useRef(new Animated.Value(0.4)).current;
    const position = useRef(new Animated.Value(0)).current;
  
    const fadeIn = (duration: number = 300)=>{
      Animated.timing(
        opacity,
        {
          toValue:1,
          duration,
          useNativeDriver: true
        }
      ).start();
  
     
  
    }
  
    const fadeOut = ()=>{
      Animated.timing(
        opacity,
        {
          toValue:0,
          duration: 300,
          useNativeDriver: true
        }
      ).start();
    }

    const startMovingPosition = (initPosition: number, duration: number = 300)=>{
        
        position.setValue(initPosition);
        
        Animated.timing(
            position,
            {
              toValue:0,
              duration,
              useNativeDriver: true
            //   easing: Easing.bounce
            }
          ).start();
    }

  return {
    position,
    opacity,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
}
