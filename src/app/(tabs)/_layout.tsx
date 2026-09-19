import { Tabs } from "expo-router";

const TabLayout = ()=>(
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="index" options={{title:"Home"}} />
        <Tabs.Screen name="Inisite" options={{title:"insights"}} />
        <Tabs.Screen name="Settings" options={{title:"settings"}} />
        <Tabs.Screen name="Subscription" options={{title:"subscriptions"}} />
        <Tabs.Screen name="subscription/[id]" options={{href:null}} />
    </Tabs>
)

export default TabLayout