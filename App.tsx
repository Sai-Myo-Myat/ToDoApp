
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { useCallback, useState } from 'react';
import uuid from 'react-native-uuid';
import {TasksType} from './types'

import tw from 'twrnc'

import TaskList from './components/TaskList';
import Filter from './components/Filter';


type StatusType="all" | "completed" | "incomplete"


const useTasks = () => {
  const [taskString, setTaskString] = useState("")
  const [tasks,setTasks] = useState<TasksType[]>([])
  const [status, setStauts] = useState<StatusType>("all")

  const filterAll = useCallback(() => setStauts("all"),[])

  const filterCompleted = useCallback(() => setStauts("completed"),[])

  const filterIncomplete = useCallback(() => setStauts("incomplete"),[])

  return {
    taskString,
    setTaskString,
    tasks: status === "all" ? tasks : status === "completed" ? tasks.filter(task => task.complete) : tasks.filter(task => !task.complete),
    setTasks,
    filterAll,
    filterCompleted,
    filterIncomplete
  }
}


export default function App() {
  const {taskString,setTaskString,tasks,setTasks,filterAll,filterCompleted,filterIncomplete} = useTasks()

  const addTask = (taskTitle: string) => {
    setTasks(tasks => [...tasks, {
      id: uuid.v4(),
      taskTitle,
      complete: false
    }])
    console.log(tasks)
    setTaskString("")
  }

  const deleteTask = (id: string | number[]) => {
    const deletedTaskArray = tasks.filter(task => task.id != id)
    setTasks(deletedTaskArray)
  }

  const completeTask = (id: string | number[]) => {
    setTasks(tasks => [...tasks.map(task => {
      if (task.id === id) {
        return {...task, complete: true} as TasksType
      }
      return {...task} as TasksType
    })])
  }

  
  return (
    <View style={[tw`h-1/1 p-5 flex justify-between`]}>
      <StatusBar style="auto" />
      <View style={[tw` flex flex-row mt-10  justify-around items-center `]}>
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
      <TaskList tasks={tasks} deleteFun={deleteTask} completeFun={completeTask}/>

      <View style={[tw`flex-row justify-between p-5 mt-2`]}>
        <Filter title='All' onPressFun={filterAll} />
        <Filter title='Completed' onPressFun={filterCompleted} />
        <Filter title='Incomplete' onPressFun={filterIncomplete} />
      </View>
    </View>
  );
}
