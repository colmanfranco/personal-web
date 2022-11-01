import {CSSProperties} from "react";
import {colorTheme} from "@styles/theme";

export const layoutStyles: CSSProperties = {
    backgroundColor: colorTheme.palette.navy.main,
    height: 60,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 16,
};