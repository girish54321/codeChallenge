import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, } from 'react';
import { View, Image, FlatList } from 'react-native';
import { UseData } from './data/dataHook';
import { ListHeader, ListItem } from './List/ListComponet';
const Stack = createStackNavigator();

function HomeScreen() {
    const [data] = UseData()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={<ListHeader />}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ListItem brand={item} />}
            />
        </View>
    );
}

export const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                title: "Strategies",
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 22
                }
            }}>
                <Stack.Screen
                    options={{
                        headerLeft: () => (
                            <Image source={require('./assets/menu.png')} style={{ marginLeft: 14 }} />
                        ),
                    }}
                    name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
