import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card>
                    
                    <Card.Image source={require('./images/uthappizza.png')}>
                    <Card.Title style={{margin: 20}}>{dish.name }</Card.Title>
                    </Card.Image>

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

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

export default Dishdetail;