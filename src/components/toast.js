import { toast} from 'react-toastify';

export const notify = ( text, type) => {
  if(type === "success") {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
    })

  } else {
    toast.error(text,{
      position: "top-right",
      autoClose: 5000,

    })
  }
};

