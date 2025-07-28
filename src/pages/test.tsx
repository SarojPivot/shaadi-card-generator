// import { BootstrapModal } from "@components/index";

// import { Box, Stack } from "@mui/material";

// import {
//   Button,
//   FormikControl,
//   LinearProgressStyled,
// } from "abg-common/components";

// import { Form, Formik, FormikHelpers, FormikValues } from "formik";

// import { t } from "i18next";

// import {
//   extractDependencyData,
//   formikBasicStyle,
//   getErrorMessage,
// } from "@utils";

// import ToastService from "@services/toast.service";

// import { IConsignment, IDropdownOption } from "@interfaces";

// import { useContextSelector } from "use-context-selector";

// import { ConsignmentContext } from "@context";

// import ConsignmentService from "@services/consignment.service";

// interface ConsignmentDependencyDialogProps {
//   data: IConsignment;

//   onClose: () => void;

//   consignmentDependencyOptions: IDropdownOption[];

//   invoicingDependencyOptions: IDropdownOption[];
// }

// const styles = formikBasicStyle();

// const ConsignmentDependencyDialog: React.FC<
//   ConsignmentDependencyDialogProps
// > = ({
//   onClose,

//   data,

//   consignmentDependencyOptions,

//   invoicingDependencyOptions,
// }) => {
//   const consignmentId = data?.consignmentKey ?? "";

//   const fetchConsignmentDetails = useContextSelector(
//     ConsignmentContext,
//     (v) => v.fetchConsignmentDetails
//   );

//   const initialValues: FormikValues = {
//     consignmentDependency:
//       extractDependencyData(data, "CONSIGNMENT_CREATION_DEPENDENCY")
//         ?.dependencyReasons ?? [],

//     invoicingDependency:
//       extractDependencyData(data, "INVOICING_DEPENDENCY")?.dependencyReasons ??
//       [],
//   };

//   const handleSubmit = async (
//     values: FormikValues,

//     { setSubmitting }: FormikHelpers<FormikValues>
//   ) => {
//     try {
//       const { consignmentDependency, invoicingDependency } = values;

//       const combinedReasons: string[] = [
//         ...consignmentDependency,

//         ...invoicingDependency,
//       ];

//       await ConsignmentService.updateConsignmentDependency(
//         consignmentId,
//         combinedReasons
//       );

//       ToastService.addMessage("Consignment Dependency updated successfully.", {
//         variant: "success",
//       });

//       fetchConsignmentDetails();

//       onClose();
//     } catch (ex) {
//       const errorMsg = getErrorMessage(ex).errorMessage;

//       ToastService.addMessage(
//         errorMsg ?? "Failed to submit consignment dependency reason",
//         {
//           variant: "error",
//         }
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <BootstrapModal
//       modalStyles={{
//         "& .MuiPaper-root": { minWidth: "450px", maxWidth: "850px" },
//       }}
//       onClose={onClose}
//       open={true}
//       dialogHeading={"Consignment Dependency"}
//     >
//       <>
//         <Stack mt={4}>
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validateOnMount={true}
//             enableReinitialize={true}
//           >
//             {(formik) => {
//               return (
//                 <Form>
//                   <Stack gap={2}>
//                     <Stack sx={styles.inputWrapper}>
//                       <Box flex={1}>
//                         <FormikControl
//                           control="select"
//                           label={t("Consignment Dependency")}
//                           name="consignmentDependency"
//                           options={consignmentDependencyOptions}
//                           fullWidth
//                           selectProps={{
//                             multiple: true,
//                           }}
//                         />
//                       </Box>
//                     </Stack>

//                     <Stack sx={styles.inputWrapper}>
//                       <Box flex={1}>
//                         <FormikControl
//                           control="select"
//                           label={t("Invoicing Dependency")}
//                           name="invoicingDependency"
//                           options={invoicingDependencyOptions}
//                           fullWidth
//                           selectProps={{
//                             multiple: true,
//                           }}
//                         />
//                       </Box>
//                     </Stack>
//                     <Stack sx={styles.buttonContainer}>
//                       <Button
//                         variant="outlined"
//                         onClick={onClose}
//                         sx={styles.button}
//                         disabled={formik.isSubmitting}
//                       >
//                         {t("CANCEL")}
//                       </Button>

//                       <Button
//                         variant="contained"
//                         type="submit"
//                         loading={formik.isSubmitting}
//                         disabled={formik.isSubmitting || !formik.isValid}
//                         sx={styles.button}
//                       >
//                         Confirm
//                       </Button>
//                     </Stack>
//                   </Stack>

//                   {formik.isSubmitting && (
//                     <LinearProgressStyled position="top" />
//                   )}
//                 </Form>
//               );
//             }}
//           </Formik>
//         </Stack>
//       </>
//     </BootstrapModal>
//   );
// };

// export default ConsignmentDependencyDialog;
