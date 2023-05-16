import { View, FlatList } from "react-native"
import { FC } from "react"
import { TasksType } from "../types"
import TaskComponent from './Task'

import tw from 'twrnc'

interface Props {
    tasks: TasksType[]
}

const TaskList:FC<Props> = ({tasks}) => {
    return (
        <FlatList
        style={[tw`p-3`]}
        data={tasks}
        renderItem={({item}) => <TaskComponent task={item} />}
        keyExtractor={item => item.id.toString()}
        />
    )
}

export default TaskList;