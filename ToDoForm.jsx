import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
            />
            <Button title="Add Task" onPress={() => addTask(taskText)} />
        </View>
        
    );
}

const styles = StyleSheet.create({  
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },  
})

export default ToDoForm;