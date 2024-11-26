import * as Yup from "yup";

export const enquiry = Yup.object({
  email: Yup.string().email().required("This field is mandatory"),
  phone: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: "Please enter a valid number.",
    excludeEmptyString: false,
  }),
  description: Yup.string().min(3).max(300),
  name: Yup.string()
    .min(2)
    .max(50)
    .required("This field is mandatory")
    .matches(
      /^[a-zA-Z ]+$/,
      "Name cannot have special characters and whitespace"
    )
    .strict(true)
    .trim(),
});
