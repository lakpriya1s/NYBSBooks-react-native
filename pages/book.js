import React,{Component} from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, Button, Linking } from 'react-native'
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class Book extends Component {
    render() { 
        const {book} = this.props.route.params;
        return (
            <ScrollView>
            <Card containerStyle={{}} wrapperStyle={{}}>
                    <View>
                        <Text style={styles.title}>Rank: {book.rank}</Text>
                        <Text style={styles.title}>{book.title}</Text>
                        <Text style={styles.title}>Author: {book.author}</Text>
                        <Text style={styles.title}>Publisher: {book.publisher}</Text>
                        <Text style={styles.title}>Contributor: {book.contributor}</Text>
                        <Text style={styles.title}>Created Date: {book.created_date}</Text>
                        <Text style={styles.title}>ISBN: {book.primary_isbn10}</Text>
                        <Text style={styles.title}>Last Week Rank: {book.rank_last_week} </Text>
                        <Text style={styles.title}>{book.descriTexttion}</Text>
                    </View>
                        <View
                            style={{
                            position: "relative",
                            alignItems: "center"
                            }}>
                            <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={{
                                uri: book.book_image
                            }}
                            PlaceholderContent={<ActivityIndicator />}>
                            </Image> 

                            <View style={styles.buttonStyle}>
                                <Button title='Buy on Amazon.com' onPress={ ()=> Linking.openURL(book.amazon_product_url) } />
                            </View>
                        </View>
                    </Card>
                    </ScrollView>
          );
    }
}
 
export default Book;

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
    image: {
        flex: 0,
        width:"100%",
        height: 500,
        position: "relative"
    },
    title: {
        fontSize: 20
    },
    buttonStyle: {
        padding: 20,
    }
});
