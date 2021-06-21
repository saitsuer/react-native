import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

function RenderItem(props) {

    const item = props.item;

    if (item != null) {
        return (
            <Card>
                <Card.Image source={{ uri: baseUrl + item.image }} style={{ justifyContent: "center", alignItems: 'center', flex: 1 }} >
                    <Card.FeaturedTitle  > {item.name} </Card.FeaturedTitle>
                    <Card.FeaturedSubtitle > {item.designation}  </Card.FeaturedSubtitle>
                </Card.Image>
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class Home extends Component {



    render() {

        return (
            <ScrollView>
                <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);