import * as React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Input, useTheme } from "@ui-kitten/components";

import ExerciseInput from "../../components/workout/ExerciseInput";

const CreateNewWorkoutPage = () => {
    return (
        <Layout style={styles.container}>
            <Layout style={styles.inputGroup}>
                <Text>Template Name</Text>
                <Input style={styles.titleInput} placeholder="Template Name" />
            </Layout>
            <ExerciseInput />
        </Layout>
    );
};

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
    },
});

export default CreateNewWorkoutPage;
