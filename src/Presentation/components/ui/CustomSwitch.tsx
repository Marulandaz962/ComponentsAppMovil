import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { colors } from '../../../config/theme/Theme';

interface Props {
    isOn: boolean,
    text?:  string,
    onChange: (value: boolean) => void,

}



const CustomSwitch = ({isOn, text, onChange}: Props) => {
    return (
        <View style={styles.switchRow}>

            {
                text &&  <Text style= {{color: colors.text}}>{text}</Text>
            }

          <Switch
            thumbColor={Platform.OS === 'android' ? colors.switch : colors.cardBackground}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value={isOn} 
             />

        </View>
    );
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
});

export default CustomSwitch;
