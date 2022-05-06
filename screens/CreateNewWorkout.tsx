import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View, TextInput } from "../components/Themed";
import ExerciseInput from "../components/workout/ExerciseInput";

const CreateNewWorkoutPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text>Template Name</Text>
                <TextInput 
                    style={styles.titleInput} 
                    placeholder="Template Name"
                />
            </View>
            <ExerciseInput />
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleInput: {
        borderWidth: 1,
        width: "100%",
        height: 30,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    inputGroup: {
        marginVertical: 20,
    }
});

export default CreateNewWorkoutPage;