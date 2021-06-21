import React, { Component } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {

    const { navigate } = this.props.navigation;


    const renderItem = ({ item, index }) => (
      <Tile
        key={index}
        title={item.name}
        caption={item.description}
        featured
        onPress={() => navigate('Dishdetail', { dishId: item.id })}
        imageSrc={{ uri: baseUrl + item.image }}
      />
    )

    return (
      <FlatList

        data={this.props.dishes.dishes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}

      />
    );
  }
}

export default connect(mapStateToProps)(Menu);