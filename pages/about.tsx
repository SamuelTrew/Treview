import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import Link from "../common/components/Link"

import type { ReactElement } from "react"

export default function About(): ReactElement {
   return (
      <Container maxWidth="lg">
         <Box
            sx={{
               my: 4,
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Typography gutterBottom component="h1" variant="h4">
               MUI v5 + Next.js with TypeScript example
            </Typography>
            <Box maxWidth="sm">
               <Button noLinkStyle component={Link} href="/" variant="contained">
                  Go to the home page
               </Button>
            </Box>
         </Box>
      </Container>
   )
}
