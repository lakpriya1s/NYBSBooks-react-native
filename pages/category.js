import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { Component } from 'react';
import { Card } from "react-native-elements";
import axios from "axios";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            list_name: "",
            list_code:""
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/'+this.props.route.params.titleid+'.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results.books,
            list_name: response.data.results.list_name,
            list_code: response.data.results.list_name_encoded
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }
    
    render() { 
        var {isLoaded, data, list_name, list_code} = this.state;

        if(!isLoaded){
            return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
        }else{
            const renderItem = ({ item }) => (
                <Card containerStyle={{}} wrapperStyle={{}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
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
                    />
                    <Text>Pranshu Chittora</Text>
                </View>
                </Card>
            );
          
            return (
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.primary_isbn10}
                  />
                </SafeAreaView>
              );
        }
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
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20
    },
})

export default Category;