import React from "react";
import { Card, CardMedia, CardActionArea, Button } from "@mui/material";
import Resume from "../assets/DonsereauxResume.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import Resume2 from "../assets/DonsereauxResume.pdf";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Experience() {
  return (
    <Card>
      <Grid
        sx={{
          width: 7 / 8,
          display: "block",
          alignContent: "center",
          flex: "center",
          m: "auto",
        }}
      >
        <Typography variant="h4" gutterBottom >
          Experience:
        </Typography>

        <Typography variant="h5" gutterBottom>
          Undergraduate Teaching Assistant
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
        As a Teaching Assistant in the Computer Science department, 
        I lead introductory courses in Python and Java, catering to 
        an average class size of 150 undergraduate students. My 
        responsibilities extend beyond lecturing to include designing, 
        administering, and grading examinations and coursework that 
        challenge and enhance the students' understanding and skills 
        in programming.

        In addition to my teaching duties, I provide personalized 
        guidance to students regarding their academic journeys and 
        career prospects within the computer science field. I work 
        closely with individuals to map out their graduation paths, 
        ensuring they align with their long-term goals and the evolving 
        demands of the tech industry.

        </Typography>

        <Typography variant="h5" gutterBottom>
          Assistant Manager
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
        At the age of 17, I stepped into a leadership role as an Assistant 
        Manager at Dion's Pizza. This position proved to be an opportunity 
        that far exceeded my expectations in terms of skill and experience 
        development. In my managerial capacity, I oversaw the entire food 
        preparation process within the restaurant, ensuring that every dish 
        met our high standards for quality and safety.

        My responsibilities extended beyond kitchen management; I monitored 
        and enforced stringent food safety protocols to maintain health standards. 
        While managing the restaurant staff, I was actively involved in training 
        new employees in everything from our specific culinary techniques to 
        effective cleaning procedures. Customer service was a key focus, and I 
        coached my team to deliver outstanding service that matched the quality of 
        our food.

        Additionally, I was tasked with delegating tasks, optimizing both time and 
        financial management to enhance store operations and profitability. My role 
        required a balanced approach to leadership, emphasizing efficiency, safety, 
        and customer satisfaction—all of which were critical in maintaining the 
        esteemed reputation of Dion's Pizza.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Software Engineering & Object-Oriented Design courses
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
        The Software Engineering and Object-Oriented Design courses at Colorado State 
        University are both modeled after the workplace. These team-based courses have 
        the goal of each team developing a website within the semester. They cover ReactJS, 
        Java, HTML, and CSS for coding the site, as well as Scrum and Agile development 
        methodologies for team design. These courses taught me a great deal about teamwork 
        and software development, far more than any of my other courses. They mark a defining 
        point in my programming career that I will always hold close to my heart.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Natural Sciences College Counsil:
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
        As a member of the Natural Sciences College Council, I help shape the educational 
        and administrative policies at our institution. 
        My responsibilities are providing informed opinions and recommendations 
        directly to the Dean's office and focusing on the introduction and modification of 
        policies and procedures that impact both faculty and students. This advisory 
        role is critical as it bridges the gap between students' needs and the 
        faculty's objectives, ensuring that both perspectives are considered in the 
        decision-making process.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Skills:
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Languages: 
          <li>Java </li> <li>C++ </li> <li> Reactjs </li> <li> HTML/CSS </li> <li>Python</li> <li>SQL</li> <li>C</li>  
          Development Tools:
          <li>Github </li> <li>VScode </li> <li>mySQL</li> <li> Unreal Engine 5</li> <li>Postman</li> <li>Game Maker 2</li>
          Soft Skills:
          <li>Agile & Scrum Development</li> <li> Team management</li> <li>Time management</li> <li>Training</li> <li>Teaching</li> <li>Customer Service</li>
          
          
        </Typography>

        <Grid sx={{ width: 4 / 5, mb: 2 }}>
          <Button
            variant="contained" // or "outlined", "text", etc., depending on your preference
            component="a" // Ensure it's treated as an anchor link
            href={Resume2} // Your PDF file's path or URL
            download="DonsereauxResume.pdf" // Suggests the filename for the downloaded file
            target="_blank" // Optional: Opens the link in a new tab/window
            startIcon={<DownloadIcon/>}
          >
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
