import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItems';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'buy chocolate', key: '2'},
    { text: 'buy car', key: '3'},
    { text: 'buy motobie', key: '4'},
    { text: 'play soccer', key: '5'},
    { text: 'play football', key: '6'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key);
    });
  }
  const handleAddToDo = (text) => {
    if(text.length > 3) {
      setTodos([...todos, {text, key: Math.random().toString()}])
    } else {
      Alert.alert('OOPS !', 'TODO MUST BE OVER 3 CHARS LONG', [
        {text: "Undertood", onPress: () => console.log('alert closed')}
      ]);
    }
  }
  return (
    // <SandBox/>
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo handleAddToDo={handleAddToDo}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
  },
  list: {
    marginTop: 20
  }
});
