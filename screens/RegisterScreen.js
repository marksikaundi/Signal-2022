import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text>Hey Register Here</Text>

            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {

    }
})
