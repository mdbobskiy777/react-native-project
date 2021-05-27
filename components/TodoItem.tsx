import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type PropsType = {
    item: { text: string, key: string },
    pressHandler: (key: string) => void
};

const TodoItem: React.FC<PropsType> = ({ item, pressHandler }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});

export default TodoItem;