import * as React from "react";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import IconSource from "../../constants/IconSource";

/**
 * Icon sources being used in this app
 */

function TabBarIcon({
    source,
    ...props
}: {
    name: React.ComponentProps<typeof FontAwesome | typeof FontAwesome5>["name"];
    color: string;
    source: IconSource;
}) {
    switch (source) {
        case IconSource.FontAwesome:
            return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
            break;
        case IconSource.FontAwesome5:
            return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
            break;
        case IconSource.MaterialCommunityIcons:
            return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
            break;
        case IconSource.MaterialIcons:
            return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
            break;
    }
}

export default TabBarIcon;
