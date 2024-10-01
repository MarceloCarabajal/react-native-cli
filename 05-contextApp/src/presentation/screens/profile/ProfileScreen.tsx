import { Pressable, Text, View } from "react-native"
import { styles } from "../../../config"
import { useProfileStore } from "../../store/profile-store"

export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{email}</Text>

        <Pressable
          onPress={ () => useProfileStore.setState( {name: 'Nala Carabajal'})} 
          style={styles.primaryButton}
        >
          <Text>Cambiar nombre</Text>
        </Pressable>

        <Pressable
          onPress={ () => useProfileStore.setState( {email: 'nala@gmail.com'})} 
          style={styles.primaryButton}
        >
          <Text>Cambiar email</Text>
        </Pressable>

        <Pressable
          onPress={ () => changeProfile('Simón Carabajal', 'simon@email.com')} 
          style={styles.primaryButton}
        >
          <Text>Cambiar email</Text>
        </Pressable>

    </View>
)
}