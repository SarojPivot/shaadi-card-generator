import { Stack, Typography } from "@mui/material";
import ShaadiForm from "./shaadi-form";
import WebFont from "webfontloader";


const ShaadiCardGenerator: React.FC = () => {
WebFont.load({
  google: {
    families: ['Great Vibes', 'Lato', 'Dancing Script', 'Roboto'] // Include all used fonts
  },
  active() {
    document.fonts.ready.then(() => {
      console.log('Fonts are ready!');
      // Only trigger PDF download after this if needed
    });
  }
});
    return (
        <Stack mt={'2rem'} gap={'5rem'}  >
        <Typography variant='h3' textAlign={'center'} >
            Shaadi Card Generator
        </Typography>
        <ShaadiForm />
        </Stack>
    )
}

export default ShaadiCardGenerator;