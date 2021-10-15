import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const listNumber = [1,2,3,4,5]

const ListScreen = () => {
    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.center]}>
                {
                    listNumber.map((item, index) => <Text key={String(index)}>{item}</Text>)
                }
                <Text>{`Hello`}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill:{
        flex:1
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListScreen