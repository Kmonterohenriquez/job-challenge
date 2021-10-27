import React from "react";
import CardUI from "../components/CardUI";
import { Box, Typography } from "@mui/material/";
import PropTypes from "prop-types";
import "../styles/Home.sass"

const Home = ({ renderedData }) => {
  const renderedCards = renderedData.map((card) => (
    <CardUI cardData={card} key={card.id} />
  ));
  return (
    <div>
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontSize: "3.5rem", fontWeight: "700", textAlign: "center", paddingBottom: "15px"}}
      >
        Portfolio Grid 4
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: "1.5rem", textAlign: "center", paddingBottom: "30px" }}
        color="text.secondary"
      >
        Portfolio Grid 4
      </Typography>

      <Box
        id="grid-container"
        sx={{
          display: "grid",
          gridGap: "10px",
        }}
      >
        {renderedCards}
      </Box>
    </div>
  );
};
Home.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  data: PropTypes.array.isRequired,
};

export default Home;
