const headerFooterStyle = (theme: Record<string, string>) => ({
    headerStyle: {
        backgroundColor: theme["color-basic-900"],
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitleStyle: {
        color: theme["color-basic-default"],
    },
    tabBarStyle: {
        backgroundColor: theme["color-basic-900"],
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
        paddingTop: 10,
        paddingBottom: 10,
        height: "10%",
    },
});

export default headerFooterStyle;
