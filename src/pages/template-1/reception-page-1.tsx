import React from "react";
import { Stack, Typography } from "@mui/material";
import receptionImage from "../../assets/v1injpeg.jpg";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const ReceptionPage1: React.FC = () => {
  const formData = useSelector((state: RootState) => state.shaadi.formData);
  const { receptionDate, receptionTime } = formData;

  const displayDate = receptionDate
    ? new Date(receptionDate).toDateString()
    : "Date TBD";
  return (
    <Stack
      sx={{
        width: "794px",
        height: "1123px",
        backgroundImage: `url(${receptionImage})`,
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
      <Stack gap={2} alignItems="center" justifyContent="center">
        <Typography
          variant="h3" 
          textAlign="center"
          sx={{
            fontFamily: "'Great Vibes', cursive", 
            fontWeight: 700,
            fontSize: '4rem',
            color: "#24937bff", 
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Reception Ceremony
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2rem",
            color: "#5a3e36",
            lineHeight: 1.5,
            maxWidth: "70%",
            px: 2,
          }}
        >
          “With vows exchanged and hearts tied in sacred unity,
          <br />
          Come, meet the couple whose love is now destiny.
          <br />
          An evening of music, joy, and light,
          <br />
          You’re invited to grace this reception night.”
        </Typography>

        <Typography
          variant="h4" 
          textAlign="center"
          sx={{
            fontFamily: '"Great Vibes", cursive',
            color: "#8e0495ff", 
            padding: "2rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
            lineHeight: 1.5,
          }}
        >
          On {displayDate}
          {receptionTime && (
            <>
              <br />
              At {receptionTime}
            </>
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ReceptionPage1;
