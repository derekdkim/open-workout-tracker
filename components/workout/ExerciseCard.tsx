import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

interface ExerciseCardProps {
    items: { name: string; sets: number }[];
}

const ExerciseCard = ({ items }: ExerciseCardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Exercise Template</Text>
            <Text style={styles.date}>10 days ago</Text>
            <View>
                {items.map((item, index) => (
                    <Text style={styles.exerciseItem} key={index}>{`${item.sets} x ${item.name}`}</Text>
                ))}
                <Text style={styles.exerciseItem}>4 x Squat (Barbell)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 25,
        padding: 20,
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
    exerciseItem: {
        fontSize: 16,
        marginBottom: 6,
    },
});

export default ExerciseCard;
