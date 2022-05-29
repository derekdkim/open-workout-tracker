import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@ui-kitten/components";

import { RootStackParamList } from "../types";
import PageTabNavigator from "./PageTabNavigator";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import CreateNewWorkoutPage from "../screens/workout/CreateNewWorkout";
import headerFooterStyle from "../constants/HeaderStyle";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const theme = useTheme();
    return (
        <Stack.Navigator
            screenOptions={{
                ...headerFooterStyle(theme),
            }}
        >
            {/* The top header is not the stack navigator header */}
            <Stack.Screen name="Root" component={PageTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
            <Stack.Screen name="Create New Workout" component={CreateNewWorkoutPage} />
        </Stack.Navigator>
    );
}

export default RootNavigator;
