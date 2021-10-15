import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'

// StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        alignItems: 'center',
    },
    creatorText: {
        top: 10,
        textAlign: 'center',
    },
    outerCircle:{
        width: 30,
        height: 30,
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#000000',
    },
    outerCircleActive:{
        width: 30,
        height: 30,
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleActive:{
        padding: 5,
        borderRadius : 30/2,
        backgroundColor: 'red'
    },
})


// Class Component
const ChallengeScreen = (props) => {
    const [selected, setSelected] = useState(false)

    const onSelected = () =>{
        setSelected(prevState => !prevState)
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.center]}>
                <TouchableOpacity onPress={onSelected}>
                    {/* Conditional Rendering using Ternary Operator */}
                    { selected ? 
                    <View style={[styles.outerCircle]}></View> :
                    <View style={[styles.outerCircleActive]}>
                        <View style={[styles.circleActive]}></View>
                    </View>
                    }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ChallengeScreen