import { StyleSheet, Pressable } from "react-native";

import { Text, View, TextInput } from "../Themed";

const ExerciseInput = () => {
    return (
        <View>
            <Text>Exercise Name</Text>
            <Pressable>
                <View>
                    <Text>Hello</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});

export default ExerciseInput;