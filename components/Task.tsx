import { FC } from "react";
import { TasksType } from "../types";
import { View, Text, Button } from "react-native";

import CustomButton from "./CustomButton";

import tw from 'twrnc'

interface Props {
    task: TasksType,
    deleteFun: (id: string | number[]) => void,
    completeFun: (id: string | number[]) => void
}

const Task:FC<Props> = ({ task, deleteFun, completeFun }) => {
    return (
        <View style={[tw` p-2}`]}>
            <Text style={[tw`py-2 text-lg ${task.complete ? "line-through text-green-400" : ""}`]}> { task.taskTitle }</Text>
            <View style={[tw`flex flex-row`]}>
                <CustomButton text="Complete" onPressFun={completeFun} id={task.id}/>
                <CustomButton text="Delete" onPressFun={deleteFun} id={task.id}/>
            </View> 
        </View>
    )
}

export default Task;