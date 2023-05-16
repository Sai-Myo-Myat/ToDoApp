import { Pressable, Text } from "react-native";
import tw from 'twrnc'

const CustomButton = (props: {onPressFun: () => void, text: string}) => {
    const {onPressFun, text} = props;

    return (
        <Pressable style={[tw`bg-blue-400 p-2 m-2 rounded-lg`]} onPress={onPressFun}>
            <Text style={[tw`text-white`]}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton;