import Box from "@mui/material/Box";

export const Base = ({ children }: {children: JSX.Element}) => {
    return (
        <Box width='20px' height='20px'>
            {children}
        </Box>
    )
}