// src/hooks/useAnimation.tsx
import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(-100)).current;



    const fadeIn = () => {
        Animated.timing(animatedTop, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.elastic(3),
        }).start(() => console.log('animation ended top'));


    //     Animated.timing(animatedOpacity, {
    //         toValue: 1,
    //         duration: 300,
    //         useNativeDriver: true,
    //     }).start(() => console.log('Animation Ended'));
    // };



        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('Animation Ended'));
    };


    

    const fadeOut = () => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => animatedTop.setValue(-100));  // Cambiado de resetAnimation() a setValue(-100)
    };

    const starMovingTopPosition = ({

        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => {}

 
    }) => {

        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop,{
            toValue : toValue,
            duration : duration,
            useNativeDriver: true,
            easing: easing
            
        }).start(callback)

    }

    return {
        // Methods
        fadeIn,
        fadeOut,
        starMovingTopPosition,

        // Propities
        animatedOpacity,
        animatedTop,
        
    };
};
