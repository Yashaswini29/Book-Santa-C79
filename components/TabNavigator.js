import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export const TabNavigator = createBottomTabNavigator({
    DonateScreen: {screen: DonateScreen},
    RequestScreen: {screen: RequestScreen}
})