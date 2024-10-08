import { StyleSheet, Text, View } from "react-native"

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box1: {
        backgroundColor: '#5856D6',
        flex: 2
    },
    box2: {
        backgroundColor: '#2d2c7e',
        flex: 4
    },
    box3: {
        backgroundColor: '#1a195e',
        flex: 4
    }
    
})