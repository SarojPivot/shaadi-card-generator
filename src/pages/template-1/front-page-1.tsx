import React from "react";
import { Stack, Typography } from "@mui/material";
import frontImage from "../../assets/reception1.jpg";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { capitalizeWords } from "../../util";

const FrontPage1: React.FC = () => {
  const formData = useSelector((state: RootState) => state.shaadi.formData);
  const { brideName, groomName, venue, weddingDate } = formData;

  return (
    <Stack
      sx={{
        width: "794px",
        height: "1123px",
        backgroundImage: `url(${frontImage})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      <Stack gap={4} mt={"-15rem"} alignItems="center" justifyContent="center">
        <Stack>
          <Typography
            variant="h3" 
            textAlign="center"
            sx={{
              fontFamily: "'Noto Sans Devanagari', sans-serif", 
              fontWeight: 700,
              fontSize: { xs: "3rem", sm: "4rem" }, 
              color: "#6F4E37", 
              lineHeight: 1,
              mb: "0.5rem", 
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            ॐ
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              fontFamily: "'Noto Sans Devanagari', sans-serif", 
              fontWeight: 500,
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "#6F4E37", 
              lineHeight: 1.8,
              mb: { xs: 1, sm: 2 },
              textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.2)",
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </Typography>
        </Stack>

        <Typography
          variant="h3" 
          textAlign="center"
          sx={{
            fontFamily: "'Great Vibes', cursive", 
            fontWeight: 700,
            fontSize: '4rem',
            color: "#8b136dff",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Wedding Invitation
        </Typography>

        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontFamily: "'Lucida Handwriting', cursive",
            fontWeight: 600,
            fontSize: "1.6rem",
            color: "#444",
            maxWidth: "75%",
            lineHeight: "3rem",
          }}
        >
          With boundless joy and the cherished blessings of our families, we
          humbly invite you to witness and celebrate the sacred union of
        </Typography>

        <Typography
          variant="h2"
          textAlign="center"
          color="#874f4f"
          sx={{
            padding: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            fontFamily: '"Great Vibes", cursive',
          }}
        >
          {capitalizeWords(groomName)} & {capitalizeWords(brideName)}
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            fontFamily: "'Palatino Linotype', serif",
            fontWeight: 500,
            fontSize: "1.5rem",
            color: "#555",
          }}
        >
          On {weddingDate ? new Date(weddingDate).toDateString() : "Date TBD"} 
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          maxWidth={"20rem"}
          sx={{
            fontFamily: "'Palatino Linotype', serif",
            fontWeight: 400,
            fontSize: "1rem",
            color: "#555",
          }}
        >
          {venue ? capitalizeWords(venue) : "Venue to be confirmed"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FrontPage1;
