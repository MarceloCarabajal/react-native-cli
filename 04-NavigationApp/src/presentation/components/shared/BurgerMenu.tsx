import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { IonIcon } from "./IonIcon";
import { globalColors } from "../../theme/theme";

export const BurgerMenu = () => {

    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer)} 
          style={{ marginLeft: 5 }}
        >
          <IonIcon 
              name="menu-outline"
              size={30}
              color = {globalColors.primary}
          />
        </Pressable>
      )
    })
  }, []);

  return(<></>);
}