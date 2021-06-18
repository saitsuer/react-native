import React, { Component } from 'react';
import { View, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';


const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </MenuNavigator.Navigator>
    );
}

function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}

const Drawer = createDrawerNavigator();

class Main extends Component {

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: '#D1C4E9' }}>
                    <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
                    <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
                </Drawer.Navigator>
                {/* <MenuNavigatorScreen /> */}
            </NavigationContainer>
        );
    }
}

export default Main;