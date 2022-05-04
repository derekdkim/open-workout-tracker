import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

import TabBarIcon from "./components/TabBarIcon";
import Colors from "../constants/Colors";
import IconSource from "../constants/IconSource";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList, RootTabScreenProps } from "../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Statistics"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="Statistics"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<"Statistics">) => ({
                    title: "Statistics",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="bar-chart" color={color} source={IconSource.FontAwesome} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Modal")}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Workout"
                component={TabTwoScreen}
                options={{
                    title: "Workout",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="dumbbell" color={color} source={IconSource.MaterialCommunityIcons} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="History"
                component={TabTwoScreen}
                options={{
                    title: "History",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="history" color={color} source={IconSource.FontAwesome5} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;
