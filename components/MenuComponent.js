import React from 'react';
import { Text } from 'react-native';
import {  FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {


   const renderItem = ({ item }) => (
        <ListItem onPress={() => props.onPress(item.id)} hideChevrom={true} >
        <Avatar rounded source={require('./images/uthappizza.png')} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
           </ListItem>
      )

    return (
            <FlatList 

                data={props.dishes}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}

                />
    );
}


export default Menu;