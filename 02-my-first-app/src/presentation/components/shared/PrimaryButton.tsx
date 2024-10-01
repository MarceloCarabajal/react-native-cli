import { Platform, Pressable, StyleSheet, Text, View } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress}: Props) => {
  return (
        <Pressable 
            onPress={ () => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={ ({pressed}) => [
                styles.button,
                pressed && styles.buttonPressed,
                {opacity: pressed? 0.5 : 1}
            ]}
        >
            <Text style={{ 
                color: Platform.OS === 'android'? 'white': '#4746AB', //Para cambiar el color dependiendo el SO
                fontSize: 18
            }}>{label}</Text>
        </Pressable>
  )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6': "white", //Para cambiar fondo dependiendo el SO
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: '#4746AB'
    }
})