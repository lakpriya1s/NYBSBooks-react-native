import React, { Component } from 'react';
import axios from 'axios';
import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './category';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 
        var {isLoaded, data } = this.state;

        if(!isLoaded){
            return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
        }else{
            const renderItem = ({ item }) => (
                <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Category", {titleid: item.list_name_encoded, name: item.display_name})
                }}>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.display_name}</Text>
                </View>
              </TouchableOpacity>
            );
          
            return (
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.list_name_encoded}
                  />
                </SafeAreaView>
              );
        }
    }
}
  
const styles = StyleSheet.create({
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
});
 
export default BookList;