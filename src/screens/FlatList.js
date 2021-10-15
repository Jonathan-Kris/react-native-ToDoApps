import React, {useState} from "react";
import { FlatList, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

const FlatListScreen = () => {
    const contacts = [
        { name: 'Andi', phoneNumber: '0812344566', id: '1' }, 
        { name: 'Budi', phoneNumber: '081233424343', id: '2' }, 
        { name: 'Charlie', phoneNumber: '061234524354', id: '3' }, 
        { name: 'Denny', phoneNumber: '0213745875485', id: '4' }];

    const [isRefresh, setIsRefresh] = useState(false)

    const onRefresh = () => {
        console.log('on-refresh')
        setIsRefresh(true)
        setTimeout(() => {setIsRefresh(false)}, 5000)
    }

    return (
        <SafeAreaView style={{flex : 1, alignItems : 'center'}}>
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <FlatList
                    data={contacts}
                    contentContainerStyle={{flex: 1}}
                    initialNumToRender={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => console.log(item)} style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text>{item.name}</Text>
                                <Text>{item.phoneNumber}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    onRefresh={onRefresh}
                    refreshing={isRefresh}
                />
            </View>
        </SafeAreaView>
    )
}

export default FlatListScreen