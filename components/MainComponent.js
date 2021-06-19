import React, { Component } from 'react';
import { View, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';


const stack = createStackNavigator();


function MenuNavigatorScreen() {
    return (
        <stack.Navigator
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
            <stack.Screen
                name="Menu"
                component={Menu}
            />
            <stack.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </stack.Navigator>
    );
}

function HomeNavigatorScreen() {
    return (
        <stack.Navigator
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
            <stack.Screen
                name="Home"
                component={Home}
            />

        </stack.Navigator>
    );
}

function ContactUsNavigatorScreen() {
    return (
        <stack.Navigator
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
            <stack.Screen
                name="Contact Us"
                component={Contact}
            />
        </stack.Navigator>
    );
}

function AboutUsNavigatorScreen() {
    return (
        <stack.Navigator
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
            <stack.Screen
                name="About Us"
                component={About}
            />
        </stack.Navigator>
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
                    <Drawer.Screen name="Contact Us" component={ContactUsNavigatorScreen} />
                    <Drawer.Screen name="About Us" component={AboutUsNavigatorScreen} />
                </Drawer.Navigator>
                {/* <MenuNavigatorScreen /> */}
            </NavigationContainer>
        );
    }
}

export default Main;