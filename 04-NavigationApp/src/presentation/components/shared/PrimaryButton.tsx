import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native";

interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryButton = ( {onPress, label}: Props) => {
  return (
    <Pressable 
        onPress={ () => onPress() }
        style={ globalStyles.primaryButton }>
        <Text style={ globalStyles.buttonText }>{label}</Text>
    </Pressable>
  )
}