import React, { useRef, useState } from "react";
import { Stack, Button } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import FrontPage1 from "./front-page-1";
import HaldiPage1 from "./haldi-page-1";
import ReceptionPage1 from "./reception-page-1";

const ShaadiCardGenerator: React.FC = () => {
  const frontRef = useRef<HTMLDivElement>(null);
  const baraatRef = useRef<HTMLDivElement>(null);
  const receptionRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const downloadPdf = async () => {
    setIsDownloading(true);
    const pdf = new jsPDF("p", "mm", "a4");
    const refs = [frontRef, baraatRef, receptionRef];

    const A4_WIDTH_MM = 210;
    const A4_HEIGHT_MM = 297;
    const A4_WIDTH_PX = 794;
    const A4_HEIGHT_PX = 1123;

    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];
      if (!ref.current) continue;

      const originalStyle = {
        width: ref.current.style.width,
        height: ref.current.style.height,
        transform: ref.current.style.transform,
        zoom: ref.current.style.zoom,
      };

      ref.current.style.width = `${A4_WIDTH_PX}px`;
      ref.current.style.height = `${A4_HEIGHT_PX}px`;
      ref.current.style.zoom = "1";

      const canvas = await html2canvas(ref.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      Object.assign(ref.current.style, originalStyle);

      const imgData = canvas.toDataURL("image/png");

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM);
    }

    pdf.save("shaadi-card-template1.pdf");
    setIsDownloading(false);
  };

  return (
    <Stack gap={"2rem"} alignItems={"center"}>
      <div ref={frontRef}>
        <FrontPage1 />
      </div>
      <div ref={baraatRef}>
        <HaldiPage1 />
      </div>
      <div ref={receptionRef}>
        <ReceptionPage1 />
      </div>

      <Button
        variant="contained"
        onClick={downloadPdf}
        sx={{
          mt: "5rem",
          mb: 4,
          backgroundColor: "#874f4f",
          width: "25%",
          alignItems: "center",
        }}
        loading={isDownloading}
      >
        Download PDF
      </Button>
    </Stack>
  );
};

export default ShaadiCardGenerator;
