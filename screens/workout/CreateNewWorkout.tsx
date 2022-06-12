import { useState, useRef } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Input, Button } from "@ui-kitten/components";

import ExerciseInput from "../../components/workout/ExerciseInput";

const CreateNewWorkoutPage = () => {
    // TODO: Create interface for exercises once finalized
    const [exercises, setExercises] = useState<any>([]);
    const scrollViewRef = useRef<ScrollView>(null);

    const createExercise = () => {
        const newExercise = { exercise: "Test" };
        setExercises([...exercises, newExercise]);
    };
    return (
        <Layout style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() => scrollViewRef?.current?.scrollToEnd({ animated: true })}
            >
                <Layout style={styles.inputGroup}>
                    <Text>Template Name</Text>
                    <Input style={styles.titleInput} placeholder="Template Name" />
                </Layout>
                {exercises.map((item: any, index: number) => (
                    <ExerciseInput key={index} />
                ))}
                <ExerciseInput />
                <Button onPress={createExercise} style={styles.exerciseButton}>
                    Add Exercise
                </Button>
            </ScrollView>
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
    exerciseButton: {
        marginVertical: 10,
    },
});

export default CreateNewWorkoutPage;
