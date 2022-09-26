import React from 'react'
import { useAnimaation } from '../hooks/useAnimaation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useState } from 'react';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimaation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () =>{
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View
        style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="#5856D6" size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    // width: '100%',
                    // height: 400,
                    ...style as any,
                    opacity,
                }}
            />
        </View>

    )
}
