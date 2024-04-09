import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Resume from "../assets/DonsereauxResume.jpg";
import Resume2 from "../assets/DonsereauxResume.pdf";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Experience() {
  return (
    <Card>
      <Grid
        sx={{
          width: 4 / 5,
          display: "block",
          alignContent: "center",
          flex: "center",
          m: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Undergraduate Teaching Assistant
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          As a Teaching Assistant I taught basic level undergraduate courses in
          python and java with an average class size of 150 students.I advised
          undergraduate level students on graduation paths and computer science
          majors. I create and graded undergraduate level papers and exams. I
          also grew a deeper passion for programming and a desire to share it to
          others.
        </Typography>

        <Typography variant="h5" gutterBottom>
          {" "}
          Software Engineering & Object-Oriented Design courses
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          The Software Engineering and the Object-Oriented Design courses are
          both designed after the workplace. Both courses are are team based
          with the goal of your team developing a website within the semester.
          The courses taught Reactjs, Java, HTML, and CSS for coding the site.
          The courses also taught Scrum and Agile development for team design.
          Both courses taught me a lot about teamwork, and Software Development
          far beyond any of my other courses. These courses are a defining point
          in my programming career that I'll always hold close to my heart.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Assistant Manager
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          At 17 years old I became an Assistant Manager and gained more skills
          than I ever planned. As a manager I prepared all food in store, also
          monitored and enforced food safety. I trained new employees on the
          food making process, the cleaning process and most important, customer
          service. I managed movement of funds inside the store. Most
          importantly I delegated tasks while enforcing food safety, time
          management and money management within the store.
        </Typography>

        <Grid sx={{ width: 4 / 5, mb: 2 }}>
          <CardActionArea href={Resume2} target="DonsereauxResume.pdf">
            <CardMedia component="img" image={Resume} alt="Resume" />
          </CardActionArea>
        </Grid>
      </Grid>
    </Card>
  );
}
