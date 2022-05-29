import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Layout, Text, useTheme } from "@ui-kitten/components";

interface ExerciseCardProps {
    items: { name: string; sets: number }[];
}

const ExerciseCard = ({ items }: ExerciseCardProps) => {
    const theme = useTheme();

    return (
        <Card style={styles.container}>
            <Text style={styles.header}>Exercise Template</Text>
            <Text style={styles.date}>10 days ago</Text>
            <Layout style={styles.exerciseListContainer}>
                {items.map((item, index) => (
                    <Text style={[styles.exerciseItem]} key={index}>{`${item.sets} x ${item.name}`}</Text>
                ))}
            </Layout>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // borderStyle: "solid",
        // borderWidth: 1,
        // borderColor: "black",
        borderRadius: 25,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    date: {
        fontSize: 14,
        color: "grey",
        marginBottom: 10,
    },
    exerciseListContainer: {
        backgroundColor: "transparent",
    },
    exerciseItem: {
        fontSize: 16,
        marginBottom: 6,
    },
});

export default ExerciseCard;
