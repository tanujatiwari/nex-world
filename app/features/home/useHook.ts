import { useFormik } from "formik";
import { toast } from "react-toastify";
import { enquiry } from "../../../utils/schemas";
import { SUCCESS_TOAST_CONFIG } from "../../../utils/static";
import ToastMessage from "../../shared/ToastMessage";
import emailjs from "@emailjs/browser";

const useHook = () => {
  const initialValues: {
    name: string;
    email: string;
    phone: string;
    description: string;
  } = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const formikprops = useFormik({
    initialValues: initialValues,
    validationSchema: enquiry,
    onSubmit: (data) => {
      const templateParams = {
        name: data?.name,
        email: data?.email,
        message: `name:${data?.name}\nemail:${data?.email}\nphone:${data?.phone}\ndescription:${data?.description}`,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((res) => {
          console.log(res);
          close();
          formikprops.setSubmitting(false);
          formikprops.setValues(initialValues);
          toast(
            ToastMessage({
              type: "success",
              title: "Awesome! We’ll get Back",
              subtitle: "Form Submitted Successfully",
            }),
            SUCCESS_TOAST_CONFIG
          );
        })
        .catch((err) => {
          close();
          console.log(err);
          formikprops.setSubmitting(false);
          toast(
            ToastMessage({
              type: "error",
              title: "Something Went Wrong",
              subtitle: "Contact system administrator",
            }),
            SUCCESS_TOAST_CONFIG
          );
        });
    },
  });
  return { ...formikprops };
};

export default useHook;
