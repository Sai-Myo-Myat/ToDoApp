import { View, FlatList, ActivityIndicator, Text } from "react-native"
import { FC } from "react"
import { TasksType } from "../types"
import TaskComponent from './Task'

import tw from 'twrnc'

interface Props {
    tasks: TasksType[],
    deleteFun: (id: string | number[]) => void,
    completeFun: (id: string | number[]) => void,
}

const TaskList:FC<Props> = ({tasks, deleteFun, completeFun}) => {
    return (
        <View >
            {
                tasks.length > 0 ? 
                    <FlatList
                    style={[tw`px-3 h-4/5`]}
                    data={tasks}
                    renderItem={({item}) => <TaskComponent task={item} deleteFun={deleteFun} completeFun={completeFun} />}
                    keyExtractor={item => item.id.toString()}
                    />
                :<View>
                    <ActivityIndicator size="large"/>
                    <Text style={[tw` text-center text-blue-200 pt-3`]} >There is no tasks...</Text>
                </View>
            }
        </View>
    )
}

export default TaskList;