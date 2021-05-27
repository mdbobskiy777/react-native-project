import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>My Todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'blue',
        width: '100%'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default Header;