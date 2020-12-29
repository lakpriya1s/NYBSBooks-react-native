import { View, StyleSheet,TouchableOpacity, Text} from "react-native";
import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{this.props.route.params.titleid}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookList') }><Text>Go to Details</Text></TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 0,
    },
})

export default Home;