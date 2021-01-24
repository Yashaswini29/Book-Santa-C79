import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { Header } from 'react-native-elements'

const MyHeader = props => {
    return(
        <Header
        centerComponent = {{text: props.title, style: {fontSize: 25, fontWeight: 'bold'}}}/>
    )
}

export default MyHeader