import React, { Component } from 'react';
import axios from 'axios';
import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            revCount: 0
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/reviews.json?isbn='+this.props.route.params.isbn+'&api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results,
            revCount: response.data.num_results
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 
        var {isLoaded, revCount, data } = this.state;

        if(!isLoaded){
            return <View style={[styles.container, styles.horizontal]}>
            <StatusBar backgroundColor="#000051" barStyle="light-content" />  
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }else{
            const renderItem = ({ item }) => (
                <View style={styles.item}>
                  <Text style={[styles.title,styles.titleColor]}>{item.summary}</Text>
                </View>
            );

            if(revCount===0){
                return (
                    <View >
                        <Text style={{fontSize: 30}}>No Reviews found!</Text>
                    </View>
                )
            }
          
            return (
                <SafeAreaView style={styles.container}>
                  <StatusBar backgroundColor="#000051" barStyle="light-content" />  
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.summary.toString()}
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
 
export default Review;