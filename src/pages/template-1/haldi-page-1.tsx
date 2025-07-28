import React from "react";
import { Stack, Typography } from "@mui/material";
import haldiImage from "../../assets/haldi1.jpg";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const HaldiPage1: React.FC = () => {
  const formData = useSelector((state: RootState) => state.shaadi.formData);
  const { haldiDate, haldiTime } = formData;
  const displayDate = haldiDate
    ? new Date(haldiDate).toDateString()
    : "Date TBD";

  return (
    <Stack
      sx={{
        width: "794px",
        height: "1123px",
        backgroundImage: `url(${haldiImage})`,
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

      <Stack
        gap={3} 
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          zIndex: 2,
          padding: { xs: "1rem", sm: "2rem" },
          maxWidth: "90%",
        }}
        mt={'8rem'}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            fontFamily: "'Great Vibes', cursive", 
            fontWeight: 700,
            fontSize: '4rem',
            color: "#f88c44ff", 
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Haldi Ceremony
        </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        sx={{
          fontFamily: "'Noto Serif Devanagari', serif",
          fontWeight: 500,
          fontSize: "1.4rem",
          color: "#5a4a42",
          lineHeight: 1.8,
        }}
      >
        सुरज की किरणें, हल्दी की बूँदें,<br />
        प्यार की छाँव में सजती हैं धुनें।<br />
        हँसी के रंग, रस्मों के संग,<br />
        नई शुरुआत के हैं ये मधुर प्रसंग।<br /><br />
        हल्दी का पीला, शुभ का रंग,<br />
        सजी महफिल, चढ़ा अनंग।<br />
        आप सादर आमंत्रित हैं इस<br />
        पावन रस्म-ए-हल्दी में शामिल होने हेतु।
      </Typography>

        <Typography
          variant="h4" 
          textAlign="center"
          sx={{
            fontFamily: '"Great Vibes", cursive',
            color: "#DAA520", 
            padding: "2rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
            lineHeight: 1.5,
          }}
        >
          On {displayDate}
          {haldiTime && (
            <>
              <br />
              At {haldiTime}
            </>
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HaldiPage1;
