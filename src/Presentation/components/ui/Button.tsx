import React from "react";
import { StyleProp, Text, View, ViewStyle, Pressable } from 'react-native';
import { colors, globalStyles } from "../../../config/theme/Theme";

interface Props {
    text: string,
    style?: StyleProp<ViewStyle>,
    onpress: () => void

}
 // inicializacion de las cosas que va a necesitar el componente


export const Button = ({style, text, onpress}: Props) => {
    return (
        <Pressable 
        onPress={onpress}
        style = {({pressed}) => ([
            globalStyles.btnPrimary, // saca los estilos del theme de config
            {
                opacity: pressed ? 0.8 : 1,
                backgroundColor: colors.primary,
               
                
            }
        ])} // se decestructura el onpress para saber si esta precionado o no
        >
            <Text style = {[
                globalStyles.btnPrimaryText,{
                    color: colors.buttonTextColor
                }
            ]}>Botoncito</Text>
        </Pressable>
    )

}