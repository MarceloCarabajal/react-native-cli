import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type RootStackParams } from "../../routes/StackNavigator";
import { BurgerMenu } from "../../components/shared/BurgerMenu";

export const HomeScreen = () => {  

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  

  return (
    <View style={ globalStyles.container }>
        
        <BurgerMenu />
        
        <PrimaryButton 
          onPress={ () => navigation.navigate('Products') }
          label="Products"
        />

        <PrimaryButton 
          onPress={ () => navigation.navigate('Settings') }
          label="Settings"
        />
    </View>
  )
}