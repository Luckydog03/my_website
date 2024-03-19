import { Outlet } from "react-router-dom";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Paper, Typography } from "@mui/material";
import AppMenu from "./AppMenu";

export default function Page() {
    return (
        <Container>
            <AppMenu />
            <Paper>
                <Container sx={{ pb: 5 }}>
                    <Box sx={{ pb: 3 }} />
                    <Typography variant={"h4"} component={"div"}>
                        Anthony Donsereaux
                    </Typography>

                    <Box sx={{ pb: 3 }} />
                    <Outlet />
                </Container>
            </Paper>
        </Container>
    );
}