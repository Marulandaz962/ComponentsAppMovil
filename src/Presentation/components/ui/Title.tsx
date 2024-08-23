import {  Text } from 'react-native'
import React from 'react'
import { colors, globalStyles } from '../../../config/theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    text: String;
    Safe?: boolean;
    white?: boolean;

}

export  const Title = ({ text, Safe = false, white = false}: Props) => {

    const {top} = useSafeAreaInsets();
  return (
        <Text
        style = {{
            ...globalStyles.title,
            marginTop: Safe ? top : 0,
            marginBottom: 10,
            color: white ? 'white': colors.text
        }}
        
        >{text}</Text>
    
  )
}