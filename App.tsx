import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, FlatList, ListRenderItemInfo } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import {TasksType} from './types'

import tw from 'twrnc'

import TaskList from './components/TaskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});


export default function App() {
  const [taskString, setTaskString] = useState("")
  const [tasks,setTasks] = useState<TasksType[]>([])

  const addTask = (taskTitle: string) => {
    setTasks(tasks => [...tasks, {
      id: uuid.v4(),
      taskTitle,
      complete: false
    }])
  }



  return (
    <View style={[tw`h-1/1 p-5 flex`]}>
      <StatusBar style="auto" />
      <View style={[tw` flex flex-row my-10  justify-around items-center `]}>
        <TextInput
          style={[tw`flex-2 border rounded-lg p-2 m-2`]}
          placeholder='Enter your task...'
          onChangeText={text => setTaskString(text)}
          value={taskString}
        />
        <Button
          title="Add"
          onPress={()=>addTask(taskString)}
        />
      </View>
      <TaskList tasks={tasks}/>
    </View>
  );
}
