// toastService.js See https://blog.logrocket.com/react-toast-libraries-compared/
import toast from "react-hot-toast";

const toastService = {
    loading: (message) => toast.loading(message),
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    info: (message) => toast(message, { icon: "ℹ️" }),
    promise: (promise, messages) => toast.promise(promise, messages),
};

export default toastService;
