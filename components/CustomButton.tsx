import { Pressable, Text } from "react-native";
import tw from 'twrnc'

const CustomButton = (props: {onPressFun: (id: string | number[]) => void, text: string, id: string | number[]}) => {
    const {onPressFun, text, id} = props;

    return (
        <Pressable style={[tw`bg-blue-400 p-2 m-2 rounded-lg`]} onPress={() => onPressFun(id)}>
            <Text style={[tw`text-white`]}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton;