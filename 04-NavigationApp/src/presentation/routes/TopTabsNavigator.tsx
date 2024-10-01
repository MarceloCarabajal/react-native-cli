import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { BurgerMenu } from '../components/shared/BurgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
        <BurgerMenu />
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={ProfileScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    </>
  );
}