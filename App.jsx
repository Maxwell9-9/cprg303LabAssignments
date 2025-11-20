/**
 * My To Do List App
 *

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    /**
     * My To Do List App
     *
     * @format
     */

    import React, { useState } from 'react';
    import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
    import ToDoForm from './ToDoForm';
    import ToDoList from './ToDoList';

    function App() {
      const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);

      const addTask = (task) => {
        if (!task) return; // ignore empty submissions
        setTasks([...tasks, task]);
      };

      return (
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 25 }}>Your To-Do List</Text>
          <View style={styles.content}>
            <ToDoList tasks={tasks} />
          </View>
          <ToDoForm addTask={addTask} />
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingVertical: 12,
        backgroundColor: '#fff'
      },
      content: {
        flex: 1,
        marginBottom: 8,
      }
    });

    export default App;
