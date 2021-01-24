import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class RequestScreen extends React.Component {
constructor() {
    super()
    this.state = {
        userId: firebase.auth().currentUser.email,
        bookName: "",
        requestReason: ""
    }
} 

requestBook = (bookName, requestReason) => {
    var userId = this.state.userId
    var requestID = this.uniqueID()
    db.collection('RequestBook').add({
        userId: userId,
        bookName: bookName,
        requestReason: requestReason,
        requestID: requestID
    })
    this.setState({
        bookName: "",
        requestReason: ""
    })
    Alert.alert("Book Requested Succesfully")
}

uniqueID() {
    return(Math.random().toString(36).substring(7))
}

    render() {
        return (
            <View>
                <MyHeader title = "Request"/>
                <KeyboardAvoidingView>
                <TextInput
                style = {{borderWidth: 2, alignSelf: 'center', marginTop: 30}}
                placeholder = "Book Name"
                onChangeText = {(text) => {
                    this.setState({
                        bookName: text
                    })
                }}/>
                <TextInput
                style = {{borderWidth: 2, alignSelf: 'center', marginTop: 30}}
                placeholder = "Why Do You Want This Book"
                onChangeText = {(text) => {
                    this.setState({
                        requestReason: text
                    })
                }}/>
                <TouchableOpacity onPress = {() => {this.requestBook(this.state.bookName, this.state.requestReason)}}>
                    <Text>Request Book</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}