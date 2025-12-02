import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = React.useState('');

  useEffect(() => {
    // Fetch tasks from tasks.json
    const fetchTasks = async () => {
      try {
        const response = await fetch(require('../data/tasks.json'));
        const data = response;
        // Add each task from the JSON file
        if (data.tasks && Array.isArray(data.tasks)) {
          data.tasks.forEach(task => {
            addTask(task);
          });
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, [addTask]);

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