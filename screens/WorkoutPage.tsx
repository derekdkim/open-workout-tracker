import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import { Text, View } from "../components/Themed";

import ExerciseCard from "../components/workout/ExerciseCard";

export default function WorkoutPage() {
    return (
        <Layout style={styles.container}>
            <Layout style={styles.exerciseGrid}>
                <ExerciseCard items={placeholderItems} />
            </Layout>
        </Layout>
    );
}

const placeholderItems= [
    {
        name: "Squat (Barbell)",
        sets: 4,
    },
    {
        name: "Bench Press (Barbell)",
        sets: 4,
    },
    {
        name: "Deadlift (Barbell)",
        sets: 4,
    },
    {
        name: "Overhead Press (Barbell)",
        sets: 4,
    },
    {
        name: "Bent Over Row (Barbell)",
        sets: 4,
    },
    {
        name: "Seated Row (Cable)",
        sets: 4,
    },
    {
        name: "Triceps Pushdown (Cable - Straight Bar)",
        sets: 4,
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    exerciseGrid: {
        flex: 1,
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
