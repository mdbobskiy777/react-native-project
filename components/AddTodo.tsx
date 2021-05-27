import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const AddTodo: React.FC<{ submitHandler:(text:string) => void }> = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (value: string) => {
        setText(value);
    };

    return (
        <View>
            <TextInput style={styles.input}
                       value={text}
                       placeholder={'new todo..'}
                       onChangeText={changeHandler}>
            </TextInput>
            <Button title='add todo'
                    onPress={() => {
                        submitHandler(text);
                        setText('');
                    }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    }
});

export default AddTodo;