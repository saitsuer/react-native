import React, { Component } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {

    const { navigate } = this.props.navigation;


    const renderItem = ({ item }) => (
      <ListItem onPress={() => navigate('Dishdetail', { dishId: item.id })} hideChevrom={true} >
        <Avatar rounded source={require('./images/uthappizza.png')} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )

    return (
      <FlatList

        data={this.state.dishes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}

      />
    );
  }
}

export default Menu;