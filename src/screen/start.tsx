import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import start from '../assets/start.png'
interface Props {
    navigation: any;
}

const NewAccount: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>


                <View>
                    <Image source={start} resizeMode='cover' style={styles.startImage} />
                    <View style={styles.container_p1}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Create New Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Continue with Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>
                        By signing up, you agree to our <Text style={styles.termscommon}>Terms of Service</Text> & <Text style={styles.termscommon}>Privacy Policy</Text> </Text>
                    <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkText}>Sign up later</Text>
                    </TouchableOpacity>
                    <Text style={styles.alreadyAccount}>Already have an account? <Text style={styles.termscommon}>Log in</Text></Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%"
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    startImage: {
        width: "100%",
    },
    container_p1: {
        marginTop: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    text: {
        fontSize: 13,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight:'500',
        color:'#000'
    },
    linkButton: {
        marginTop: 10,
    },
    termscommon:{
        color: '#F04438'
    },
    linkText: {
        fontSize: 18,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        color: '#F04438',
        fontWeight: '700',
    },
    alreadyAccount: {
        fontSize: 15,
        marginTop: 20,
        color: '#000',
        alignSelf: 'center',
        marginBottom:10,
        fontWeight:'400',
    },
});

export default NewAccount;