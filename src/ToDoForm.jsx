import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = React.useState('');
  const [fetchedTasks, setFetchedTasks] = useState([]);

  useEffect(() => {
    // Load tasks from tasks.json (bundled asset via require)
    const loadTasks = async () => {
      try {
        const data = require('./data/tasks.json');
        if (data && data.tasks && Array.isArray(data.tasks)) {
          setFetchedTasks(data.tasks);
          // Optionally populate app-level tasks from the JSON
          data.tasks.forEach(task => addTask(task));
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };
    loadTasks();
  }, []); // Empty dependency array - only run once on mount

  const handleGenerateRandomTask = () => {
    if (!fetchedTasks || fetchedTasks.length === 0) return;
    const randomTask = fetchedTasks[Math.floor(Math.random() * fetchedTasks.length)];
    
    // Extract the task text - handle both string and object formats
    const taskString = typeof randomTask === 'string' ? randomTask : randomTask.name || randomTask.title || '';
    
    setTaskText(taskString);
  };

  const handleAddTask = () => {
    const text = taskText.trim();
    if (!text) return;
    addTask(text);
    setTaskText('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
      <Button title="Add Task" onPress={handleAddTask} />
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
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginRight: 10,
      borderRadius: 5,
    }
})

export default ToDoForm;