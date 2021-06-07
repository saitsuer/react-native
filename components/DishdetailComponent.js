import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

//<Card.Title>{dish.name}</Card.Title>
//<Card.image source={require('./images/uthappizza.png')}></Card.image>

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('./images/uthappizza.png')}></Card.Image>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {
        const dishId = this.props.route.params.dishId;
        return(
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}
export default Dishdetail;