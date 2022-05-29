import { StyleSheet } from "react-native";
import { Text, Input, Layout, Button, useTheme } from "@ui-kitten/components";
import { useState } from "react";

const ExerciseInput = () => {
    const [workoutSets, setWorkoutSets] = useState<{ exercise: String }[]>([]);

    const createSet = () => {
        const newSet = { exercise: "Test" };
        setWorkoutSets([...workoutSets, newSet]);
    };

    return (
        <Layout>
            <Text>Exercise Name</Text>
            <Input style={styles.input} placeholder="Exercise Name" />
            {/* Sets */}
            <Layout>
                {workoutSets.map((item, index) => (
                    <Text key={index}>Hello</Text>
                ))}
            </Layout>
            <Button onPress={createSet}>Add Set</Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {},
    input: {
        marginVertical: 10,
    },
});

export default ExerciseInput;
