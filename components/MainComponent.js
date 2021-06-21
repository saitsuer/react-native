import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})


const stack = createStackNavigator();


function MenuNavigatorScreen({ navigation }) {
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
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24} color='white' onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
            <stack.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </stack.Navigator>
    );
}

function HomeNavigatorScreen({ navigation }) {
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
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24} color='white' onPress={() => navigation.openDrawer()} />
                    )
                }}
            />

        </stack.Navigator>
    );
}

function ContactUsNavigatorScreen({ navigation }) {
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
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24} color='white' onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
        </stack.Navigator>
    );
}

function AboutUsNavigatorScreen({ navigation }) {
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
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24} color='white' onPress={() => navigation.openDrawer()} />
                    )
                }}
            />
        </stack.Navigator>
    );
}

const CustomDrawerContentComponent = (props) => (

    <SafeAreaView>
        <ScrollView>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </ScrollView >
    </SafeAreaView>

    // <ScrollView>
    //     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    //         <View style={styles.drawerHeader}>
    //             <View style={{ flex: 1 }}>
    //                 <Image source={require('./images/logo.png')} style={styles.drawerImage} />
    //             </View>
    //             <View style={{ flex: 2 }}>
    //                 <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
    //             </View>
    //         </View>
    //         <DrawerItems {...props} />
    //     </SafeAreaView>
    // </ScrollView>
);

const Drawer = createDrawerNavigator();

function MainNavigator() {
    return (

        <Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: '#D1C4E9' }} drawerContent={(props) => <CustomDrawerContentComponent {...props} />} >
            <Drawer.Screen name="Home" component={HomeNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name="home" size={24} color='white' type="font-awesome" color={tintColor} />
                    )
                }}
            />
            <Drawer.Screen name="Menu" component={MenuNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name="list" size={22} color='white' type="font-awesome" color={tintColor} />
                    )
                }}
            />
            <Drawer.Screen name="Contact Us" component={ContactUsNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name="address-card" size={20} color='white' type="font-awesome" color={tintColor} />
                    )
                }}
            />
            <Drawer.Screen name="About Us" component={AboutUsNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon name="info-circle" size={24} color='white' type="font-awesome" color={tintColor} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}




class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        return (
            <NavigationContainer>
                <MainNavigator />
                {/* <Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: '#D1C4E9' }}>
                    <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
                    <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
                    <Drawer.Screen name="Contact Us" component={ContactUsNavigatorScreen} />
                    <Drawer.Screen name="About Us" component={AboutUsNavigatorScreen} />
                </Drawer.Navigator> */}
                {/* <MenuNavigatorScreen /> */}
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);