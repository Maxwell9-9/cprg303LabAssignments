import React from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Text,
  StyleSheet
} from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  task: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
