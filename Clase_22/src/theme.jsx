import { createTheme } from "@mui/material";
import { deepPurple } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: deepPurple,
        secondary: {
        main: '#3f51b5',
        },
    }
})