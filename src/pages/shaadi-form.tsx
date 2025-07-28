import { Stack, TextField, Button, Typography } from "@mui/material";
import { Formik, Form, useField, FormikValues } from "formik";
import { useDispatch } from "react-redux";
import { saveForm } from "../slices/shaadiSlice";
import { IShaadiForm } from "../shaadi-interface";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; 

interface TextInputProps {
  label: string;
  type: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, name }) => {
  const [field, meta] = useField(name);
  const shouldShrink = !!field.value || type === "date" || type === "time" || meta.touched;

  return (
    <TextField
      {...field}
      type={type}
      label={label}
      fullWidth
      variant="outlined"
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ""}
      slotProps={{
        inputLabel: {
          shrink: shouldShrink,
        },
      }}
    />
  );
};

const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={2}
    justifyContent="space-between"
  >
    {children}
  </Stack>
);

const initialValues: IShaadiForm = {
  groomName: "",
  brideName: "",
  weddingDate: "",
  venue: "",
  haldiDate: "",
  haldiTime: "",
  receptionDate: "",
  receptionTime: "",
};

const validationSchema = Yup.object().shape({
  groomName: Yup.string().required("Groom name is required"),
  brideName: Yup.string().required("Bride name is required"),
  weddingDate: Yup.date()
    .required("Wedding date is required")
    .typeError("Invalid date"),
  venue: Yup.string().required("Venue is required"),
  haldiDate: Yup.date()
    .required("Haldi date is required")
    .typeError("Invalid date")
    .max(Yup.ref("weddingDate"), "Haldi date must be before wedding date"),
  haldiTime: Yup.string().required("Haldi time is required"),
  receptionDate: Yup.date()
    .required("Reception date is required")
    .typeError("Invalid date")
    .min(Yup.ref("weddingDate"), "Reception must be after wedding date"),
  receptionTime: Yup.string().required("Reception time is required"),
});

const ShaadiForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = (values:FormikValues) => {
    dispatch(saveForm(values as IShaadiForm));
    navigate('/download')
  }

  return (
    <Stack
      sx={{
        maxWidth: "800px",
        margin: "auto",
        background: "#fff",
        padding: "2rem",
        border: "10px solid #c18025ff",
        borderRadius: "20px",
        boxSizing: "border-box",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
      gap={"2rem"}
    >
      <Typography variant="h4" textAlign={"center"}>
        Enter Details
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack spacing={4}>
            <FormRow>
              <TextInput label="Groom Name" type="text" name="groomName" />
              <TextInput label="Bride Name" type="text" name="brideName" />
            </FormRow>

            <FormRow>
              <TextInput label="Wedding Date" type="date" name="weddingDate" />
            </FormRow>

            <FormRow>
              <TextInput label="Venue" type="text" name="venue" />
            </FormRow>

            <FormRow>
              <TextInput label="Haldi Date" type="date" name="haldiDate" />
              <TextInput label="Haldi Time" type="time" name="haldiTime" />
            </FormRow>

            <FormRow>
              <TextInput
                label="Reception Date"
                type="date"
                name="receptionDate"
              />
              <TextInput
                label="Reception Time"
                type="time"
                name="receptionTime"
              />
            </FormRow>

            <Button
              sx={{
                backgroundColor: "rgba(103, 144, 20, 1)",
                "&:hover": { backgroundColor: "#5a32a3" },
                color: "#fff",
              }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  );
};

export default ShaadiForm;
