import React, { Component } from 'react';
import axios from 'axios';
import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";

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
          //console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 
        var {isLoaded, data } = this.state;

        if(!isLoaded){
            return <View style={[styles.container, styles.horizontal]}>
            <StatusBar backgroundColor="#000051" barStyle="light-content" />  
            <ActivityIndicator size="large" />
          </View>
        }else{
            const renderItem = ({ item }) => (
                <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Category", {titleid: item.list_name_encoded, name: item.display_name})
                }}>
                <View style={styles.item}>
                  <Text style={[styles.title,styles.titleColor]}>{item.display_name}</Text>
                </View>
              </TouchableOpacity>
            );
          
            return (
                <SafeAreaView style={styles.container}>
                  <StatusBar backgroundColor="#000051" barStyle="light-content" />  
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
        backgroundColor: '#534bae',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 10,
      },
      title: {
        fontSize: 20,
      },
      titleColor:{
        color: '#fff'
      }
});
 
export default BookList;