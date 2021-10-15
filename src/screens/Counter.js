import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import ButtonsComponent from '../components/molecules/Buttons'

// Class Component
const CounterScreen = (props) => {
    let [valueCounter, setValueCounter] = useState(0)
    const [userData, setUserName] = useState({name : ''})

    useEffect(() => {
        console.log('use effect triggered') // did mount & did update
        return () => console.log('unmounted') // Component will unmount
    }, [valueCounter]) // dependencies for did update

    // useEffect(()=>{
    //     console.log('fetch user data')
    //     setTimeout(()=>{
    //         console.log('get user data')
    //         setUserData({name : 'Jokris'})
    //     }, 5000)
    // }, [])

    const inc = () => {
        setValueCounter(prevState => {
            console.log('prevState', prevState)
            return prevState + 1;
        })
        console.log('increment', valueCounter)
    }

    const dec = () => {
        valueCounter -= 1
        setValueCounter(prevState => {
            console.log('dec prev state', prevState)
            return valueCounter
        })
        console.log('decrement', valueCounter)
    }

    const reset = () =>{
        setValueCounter(0)
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.center]}>
                <Text style={[styles.title]}>{`Simple app ${userData.name}'s counter in React Native`}</Text>
                <Text style={[styles.counterText]}>{valueCounter}</Text>
                <ButtonsComponent onPressInc={inc} onPressDec={dec} />
                <Button color="#90AACB" title='Reset'></Button>
                <Text style={[styles.creatorText]}>By Jokris 2021</Text>
            </View>
        </SafeAreaView>
    );
}


// StyleSheet
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    creatorText: {
        top: 10,
        textAlign: 'center',
    },
    center: {
        justifyContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center'
    },
    counterText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    resetButton: {
        color: "#6D8299"
    }
})

export default CounterScreen