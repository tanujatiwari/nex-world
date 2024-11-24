import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  ERROR_TOAST_CONFIG,
  SUCCESS_TOAST_CONFIG,
} from "../../../utils/static";
import ToastMessage from "../../shared/ToastMessage";

const useHook = () => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    const templateParams = {
      name: "NexWorld",
      email: value,
      message: `email:${value}`,
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
        setValue("");
        toast(
          ToastMessage({
            type: "success",
            title: "Subscribed!",
          }),
          SUCCESS_TOAST_CONFIG
        );
      })
      .catch((err) => {
        close();
        console.log(err);
        toast(
          ToastMessage({
            type: "error",
            title: "Something went wrong!",
          }),
          ERROR_TOAST_CONFIG
        );
      });
  };
  return { handleSubmit, setValue, value };
};

export default useHook;
