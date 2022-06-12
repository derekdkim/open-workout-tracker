import { StyleSheet } from "react-native";
import { Layout, Text, Input, CheckBox } from "@ui-kitten/components";

interface ExerciseSetInputProps {
    index: number;
}

const ExerciseSetInput = ({ index }: ExerciseSetInputProps) => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.setNumberText}>{index}</Text>
            <Input style={styles.weightInputBox} placeholder="100" maxLength={4} textStyle={styles.inputText} />
            <Input style={styles.repInputBox} placeholder="5" maxLength={3} textStyle={styles.inputText} />
            <CheckBox />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    setNumberText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    weightInputBox: {
        width: 90,
        height: 40,
    },
    repInputBox: {
        width: 70,
        height: 40,
    },
    inputText: {
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default ExerciseSetInput;
