import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import React from 'react';


function Contact() {

    return (
        <View>
            <Card>
                <Card.Title>{"Contact Information"}</Card.Title>
                <Card.Divider />
                <Text>
                    121, Clear Water Bay Road{"\n"}{"\n"}
                    Clear Water Bay, Kowloon{"\n"}{"\n"}
                    HONG KONG{"\n"}{"\n"}
                    Tel: +852 1234 5678{"\n"}{"\n"}
                    Fax: +852 8765 4321{"\n"}{"\n"}
                    Email:confusion@food.net{"\n"}
                </Text>
            </Card>
        </View>
    );
}

export default Contact;