import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { authenticate } from "../firebase";
// import { KeyboardAvoidingView } from "react-native";

const LoginScreen = ({ navigation }) => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     authenticate.onAuthStateChanged((authUser) => {
    //         if (authUser) {
    //             navigation.replace("Home");
    //         }
    //     });
    // }, []);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text>CS6OAPA Dev</Text>

            <Image source={{
                uri:
                "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                 autoFocus
                 type="email"
                 value={email} 
                 onChangeText={(text) => setEmail(text)}
                />
                {/* password input  */}
                <Input placeholder="Password" secureTextEntry
                 type="password"
                 value={password} 
                 onChangeText={(text) => setPassword(text)}
                 
                 />
 

            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" /> 
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});
