import { Tabs } from "expo-router";
import { View } from "react-native";
import clsx from 'clsx'
import { Image } from "expo-image";
import { tabs } from "../../../constants/data";

const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
        <View className="tabs-icon">
            <View className={clsx('tabs-pill', focused && 'tabs-active')}> 
                <Image className="tabs-glyph" source={icon} />
            </View>
        </View>
    )
}

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            {tabs.map((tab) => (
                <Tabs.Screen 
                    key={tab.name} 
                    name={tab.name} 
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
                        // tabBarShowLabel: false,
                        // tabBarActiveTintColor: "#007AFF",
                        // tabBarInactiveTintColor: "#AFB2B6",
                    }}
                />
            ))}
        </Tabs>
    )
}
    

 

export default TabLayout