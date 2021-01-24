import React from 'react';
import {View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView, FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import  MyHeader  from '../components/MyHeader';
import { ListItem } from 'react-native-elements';

export default class DonateScreen extends React.Component {
constructor() {
    super()
    this.state = {
        bookList: []
    }
}

componentDidMount() {
    this.BookList()
}

BookList = () => {
    var requestRef = db.collection('RequestBook')
    .onSnapshot((snapshot) => {
        var bookList = snapshot.docs.map(document => 
            document.data())
            this.setState({
            bookList: bookList
            })
        })
    }
    
keyExtractor = (item, index) => {
    index.toString()
}

renderItem = ({item, i}) => {
    return(
        <ListItem
        key = {i}
        title = {item.bookName}
        subtitle = {item.requestReason}
        rightElement = {
        <TouchableOpacity>
            <Text>View Request</Text>
        </TouchableOpacity>
        }
        />
    )
}

    render() {
        return (
            <View>
                <MyHeader title = "Donate Book"/>
                <FlatList
                data = {this.state.bookList}
                renderItem = {this.renderItem}
                keyExtractor = {this.keyExtractor}/>
            </View>
        )
    }
}