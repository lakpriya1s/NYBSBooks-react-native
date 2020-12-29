import { View, StyleSheet, Text} from "react-native";
import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.background}>
                <Text>Hello</Text>
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