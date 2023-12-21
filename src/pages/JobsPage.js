import React from "react";
import jobs from "../jobs.json";
import { Box, Container, Grid } from "@mui/material";
import JobCard from "../components/JobCard";
import BasicPagination from "../components/BasicPagination";
import { useParams } from "react-router-dom";

function JobsPage() {
  const params = useParams();
  const jobsPage = params.page;

  return (
    <Box sx={{ bgcolor: "#000", height: { xs: "auto", sm: "100vh" } }}>
      <Container sx={{ paddingTop: "50px" }}>
        <Grid container spacing={4}>
          {jobs.slice(jobsPage - 1, jobsPage - 1 + 5).map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <BasicPagination />
        </Box>
      </Container>
    </Box>
  );
}

export default JobsPage;
