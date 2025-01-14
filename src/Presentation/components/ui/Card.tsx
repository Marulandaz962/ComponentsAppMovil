import React, { PropsWithChildren } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { colors } from "../../../config/theme/Theme";


interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>


}

export const Card = ({ style, children}:Props) => {
    return (
        <View style = {[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10,
                width: 'auto',
            },
            style,
        ]} >
            {children}
        </View>
    )

}