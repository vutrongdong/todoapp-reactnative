import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({handleAddToDo}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    const submitAddTodo = (text) => {
        handleAddToDo(text)
        if(text.length > 3) {
            setText('')
        }
    }
    return (
        <View>
            <TextInput
              value={text}
              placeholder='new todo...'
              style={styles.inputAdd}
              onChangeText={changeHandler}
            />
            <Button title="add todo" onPress={() =>submitAddTodo(text)} color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputAdd: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    }
})