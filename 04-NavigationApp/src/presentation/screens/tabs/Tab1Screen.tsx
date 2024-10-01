import { Text, View } from "react-native"
import { BurgerMenu } from "../../components/shared/BurgerMenu";
import { IonIcon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer)} >
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   })
  // }, [])
  
  return (
    <View>
        <BurgerMenu />
        <Text>Tab 1 Screen</Text>

        <IonIcon 
            name="rocket-outline"
        />
    </View>
  )
}