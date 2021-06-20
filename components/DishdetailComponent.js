import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

//<Card.Title>{dish.name}</Card.Title>
//<Card.image source={require('./images/uthappizza.png')}></Card.image>

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={require('./images/uthappizza.png')}></Card.Image>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                />
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

// call back= şartlar olduğunda işi çağırmak için 
// promise = 


class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            favorites: []
        };
    }

    markFavorite(dishId) {
        this.setState({ favorites: this.state.favorites.concat(dishId) });
        console.log(this.state.favorites);
    }

    render() {
        const dishId = this.props.route.params.dishId;
        return (
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]}
                    favorite={this.state.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        )
    }
}
export default Dishdetail;