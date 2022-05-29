import { StyleSheet } from "react-native";
import { Text, Layout, useTheme } from "@ui-kitten/components";

import EditScreenInfo from "../components/EditScreenInfo";

export default function HistoryPage() {
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>History</Text>
            <Layout style={styles.separator} />
            <EditScreenInfo path="/screens/WorkoutPage.tsx" />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
