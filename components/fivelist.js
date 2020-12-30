import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { Component } from 'react';
import { Card, Button, Icon } from "react-native-elements";
import axios from "axios";

class FiveList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
            const renderItem = ({ item }) => (
                <TouchableOpacity onPress={() => {
                    this.props.nav.navigate("Book", {name: item.title, book: item})
                  }}>
                    <Card containerStyle={{}} wrapperStyle={{}}>
                    <Card.Title>{item.title}</Card.Title>
                        <View
                            style={{
                            position: "relative",
                            alignItems: "center"
                            }}>
                            <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={{
                                uri: item.book_image
                            }}
                            PlaceholderContent={<ActivityIndicator />}>
                            </Image>              
                        </View>
                    </Card>
                </TouchableOpacity>
            );
          
            return (
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={this.props.books.books}
                    renderItem={renderItem}
                    keyExtractor={item => item.primary_isbn10}
                  />
                </SafeAreaView>
            );
        }
}

const styles = StyleSheet.create({
    background: {
        flex: 0,
    },
    image: {
        flex: 0,
        width:"100%",
        height: 500,
        position: "relative"
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    item: {
        backgroundColor: '#63ccff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 20
    },
})
 
export default FiveList;