import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/CardUI.sass";

const CardUI = ({ cardData }) => {
  const { body, Poster, Title } = cardData;
  return (
    <Card
      sx={{
        maxWidth: 500,
        maxHeight: 500,
        boxShadow: "none",
        borderRadius: "2px",
      }}
      className="Card"
    >
      <CardMedia
        className="poster"
        component="img"
        image={Poster}
        alt={Title}
      />
      <div className="Card-info">
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {Title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {body}
        </Typography>
      </div>
    </Card>
  );
};

export default CardUI;
