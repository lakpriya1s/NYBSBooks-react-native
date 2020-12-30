import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, Image, TouchableOpacity, FlatLists } from "react-native";
import React, { Component } from 'react';
import { Card, Button, Icon } from "react-native-elements";
import axios from "axios";
import FiveList from "../components/fivelist";

class TopBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results.lists
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }
    
    render() { 
        var {isLoaded, data} = this.state;

        if(!isLoaded){
            return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
        }else{
            const renderList = ({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("Category", {titleid: item.list_name_encoded, name: item.display_name})
                    }}>
                    <View style={styles.item}>
                        <Text style={[styles.title,styles.titleColor]}>{item.display_name}</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <FiveList books={item} nav={this.props.navigation}/>
                </View>
            );

            return (
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={data}
                    renderItem={renderList}
                    keyExtractor={item => item.list_id}
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
        backgroundColor: '#534bae',
        padding: 20,
        marginTop: 20,
        marginLeft: 8,
        marginRight: 8
    },
    title: {
        fontSize: 20
    },
    titleColor:{
        color: '#fff'
      }
})

export default TopBooks;