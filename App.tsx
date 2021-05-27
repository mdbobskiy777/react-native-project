import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos,setTodos] = useState([
      { text: 'to smth 1', key: '0' },
      { text: 'to smth 2', key: '1' },
      { text: 'to smth 3', key: '2' }
  ]);

  const pressHandler = (key: string) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
  };

    const submitHandler = (text: string) => {
        text.trim()?setTodos((prevTodos) => [
            { text, key: Math.random().toString() },
            ...prevTodos
        ]): Alert.alert('Write a todo!');
    };

    return (
        <View style={styles.container}>
            <Header/>
          <View style={styles.content}>
              <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList data = {todos} renderItem= { ({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              />
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  content: {
      padding:40,
  },
  list: {
      margin:20,
  }
});
