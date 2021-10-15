import React from 'react'
import ButtonComponent from '../atom/Button'
import { View, StyleSheet } from 'react-native'

const ButtonsComponent = ({onPressInc, onPressDec}) => {
    return (
        <View style={[styles.containerButton]}>
            <ButtonComponent label='-' onPress={onPressDec}/>
            <ButtonComponent label='+' type='increment' onPress={onPressInc}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 10,
    },
})

export default ButtonsComponent