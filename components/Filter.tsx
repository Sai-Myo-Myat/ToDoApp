import { FC } from "react"
import {Pressable, Text} from 'react-native'

import tw from 'twrnc'

interface Props {
    title: string,
    onPressFun: () => void
}

const Filter:FC<Props> = ({title, onPressFun}) => {
    return(
        <Pressable  onPress={() => onPressFun()}>
            <Text style={[tw`text-blue-500`]}>{title}</Text>
        </Pressable>
    )
}

export default Filter;