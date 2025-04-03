import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { toRem } from "../../utils";

export const StyledLoginBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(5),
    width: '100%',

    "& form": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2.5),
    },

    "& button[type='submit']": {
        width: 'fit-content',
        minWidth: toRem(220),
        margin: `${theme.spacing(5)} auto 0`,
    },
})
);