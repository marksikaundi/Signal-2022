import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <StatusBar style="light" />
            <Text>Login Screen</Text>

            <Image source={{
                uri:
                "https://upload.wikimedia.org/wikipedia/commons/4/41/Signal_ultramarine_icon.svg"
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <input 
                placeholder="Email" 
                autoFocus 
                type="email" 
                value={email} 
                onChangeText={(text) => setEmail(text)} 
                />
                <input placeholder="Password" secureTextEntry type="password"
                placeholder="Password" 
                autoFocus 
                type="password" 
                value={password} 
                onChangeText={(text) => setPassword(text)} 
                />
            </View>
        </View>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        
    },
});
