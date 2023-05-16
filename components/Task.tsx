import { FC } from "react";
import { TasksType } from "../types";
import { View, Text, Button } from "react-native";

import CustomButton from "./CustomButton";

import tw from 'twrnc'

interface Props {
    task: TasksType
}

const Task:FC<Props> = ({ task }) => {
    return (
        <View style={[tw` p-2 flex  justify-between `]}>
            <Text style={[tw`py-2 text-lg`]}> { task.taskTitle }</Text>
            <View style={[tw`flex flex-row`]}>
                <CustomButton text="Complete" onPressFun={() => console.log("completed")}/>
                <CustomButton text="Delete" onPressFun={() => console.log("deleted")}/>
            </View> 
        </View>
    )
}

export default Task;