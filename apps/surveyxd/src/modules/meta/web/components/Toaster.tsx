import { FC } from "react"
import { toast, ToastContainer } from "react-toastify"

export const linkCopyToast = () =>
  toast.success("Survey link copied!", {
    theme: "dark",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  })

export const Toaster: FC = () => {
  return <ToastContainer />
}
