import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 ">
      <Image 
      source={icon} 
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs 
      screenOptions={{
        tabBarShowLabel : false,
        tabBarActiveTintColor: 'blue',
        tabBarInActiveTintColor: '#CDCDE0',
        tabBarStyle: {
            backgroundColor: 'primary',
            borderTopWidth:1,
            borderTopColor: 'primary',
            height: 84,

        }

      }}>
        <Tabs.Screen
          name="estimates"
          options={{
            title: "Estimates",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.EstimatesIcon}
                color={color}
                name="Estimates"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="invoices"
          options={{
            title: "Invoices",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.IconInvoice}
                color={color}
                name="Invoices"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="balances"
          options={{
            title: "Balances",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.EstimatesIcon}
                color={color}
                name="Balances"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            title: "Reports",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ReportIcon}
                color={color}
                name="Reports"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
