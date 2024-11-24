import { ToastOptions } from "react-toastify";

export const ERROR_TOAST_CONFIG: ToastOptions<any> = {
  className: "toast-error-message",
  position: "top-center",
  hideProgressBar: true,
  autoClose: 5000,
};
export const SUCCESS_TOAST_CONFIG: ToastOptions<any> = {
  className: "toast-success-message",
  position: "top-center",
  hideProgressBar: true,
  autoClose: 5000,
};
