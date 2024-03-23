import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function CustomerReviews() {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="sticky-slider" style={{ width: "100%" }}>
      <Slider {...settings}>
        {[...Array(10)].map((_, index) => (
          <div className="comment" key={index}>
            <Card sx={{ maxWidth: 1000 }} style={{ margin: 10 }}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={`Customer ${index + 1}`}
                    src={`https://source.unsplash.com/50x50/?person&sig=${
                      index + 1
                    }`}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <StarIcon />
                  </IconButton>
                }
                title={`Customer ${index + 1}`}
                subheader={`September ${
                  Math.floor(Math.random() * 30) + 1
                }, 2024`}
              />
              <Typography variant="h5" color="text.secondary">
                {`This is a great cafe with lovely cats. I had a wonderful time here. Highly recommended!`}
              </Typography>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerReviews;
