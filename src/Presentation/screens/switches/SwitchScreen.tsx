import React, { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Card } from '../../components/ui/Card';
import { colors } from "../../../config/theme/Theme";
import CustomSwitch from "../../components/ui/CustomSwitch";

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive : true,
        isHungry : false,
        isHappy: true,
    })


    return (
        
        
        <CustomView style = {{marginTop: 100, paddingHorizontal: 10,}} >
            <Card style = {{padding: 10,}}>

                <CustomSwitch
                    isOn = {state.isActive}
                    onChange={(value) => setState({...state, isActive: value}) }
                    text="tamo' activo papi?"
               />

                <CustomSwitch
                    isOn = {state.isHungry}
                    onChange={(value) => setState({...state, isHungry: value}) }
                    text="Tiene hambre?"
               />


                <CustomSwitch
                    isOn = {state.isHappy}
                    onChange={(value) => setState({...state, isHappy: value}) }
                    text="Es feliz :) ?"
               />


             {/* <Switch
            trackColor={{false: '#red', true: '#A5FF75'}}
            thumbColor={isEnabled ? colors.switch : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled} 
             /> */}


             </Card>
        </CustomView>
    )

}