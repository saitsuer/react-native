import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function History() {
    return (
        <Card>
            <Card.Title>Our History</Card.Title>
            <Card.Divider />
            <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.{"\n"}{"\n"}</Text>
            <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
        </Card>
    );
}
class About extends Component {

    static navigationOptions = {
        title: 'About Us',
    };
    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem key={index} >
                    <Avatar rounded source={{ uri: baseUrl + item.image }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            );
        };
        return (
            <ScrollView>
                <History />
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <FlatList
                        data={this.props.leaders.leaders}
                        renderItem={renderMenuItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);