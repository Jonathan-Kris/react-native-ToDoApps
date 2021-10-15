import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[styles.buttonText, props.type == 'increment' ? styles.buttonIncrement : styles.buttonDecrement]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonDecrement: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFB085',
    },
    buttonIncrement: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#F9D5A7'
    }
})

export default ButtonComponent