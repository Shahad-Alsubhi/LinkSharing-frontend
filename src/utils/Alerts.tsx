import toast from "react-hot-toast";
import Swal from "sweetalert2";


export const showSuccessMessage = (message: string) => {
  toast.success(message, {
    style: {
      minWidth: "fit-content",
      backgroundColor: "#333333",
      color: "#FAFAFA",
      fontSize: "16px",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="100%"
        fill="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#a)">
          <path
            fill="#fff"
            d="M19.5 3h-1.875a.375.375 0 0 0-.375.375V7.5a1.5 1.5 0 0 1-1.5 1.5H8.275a.766.766 0 0 1-.775-.7.75.75 0 0 1 .75-.8h7.125a.375.375 0 0 0 .375-.375v-3.75A.375.375 0 0 0 15.375 3H8.56a1.487 1.487 0 0 0-1.06.44L3.44 7.5A1.487 1.487 0 0 0 3 8.56V19.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM12 17.25a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Z"
          />
          <path
            fill="#737373"
            d="M16.25 2.5h-1.563a.313.313 0 0 0-.312.313V6.25a1.25 1.25 0 0 1-1.25 1.25H6.896a.638.638 0 0 1-.646-.584.625.625 0 0 1 .625-.666h5.938a.313.313 0 0 0 .312-.312V2.813a.312.312 0 0 0-.313-.313H7.135a1.239 1.239 0 0 0-.884.366L2.866 6.25a1.239 1.239 0 0 0-.366.884v9.116a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V3.75a1.25 1.25 0 0 0-1.25-1.25ZM10 14.375a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  });
};

export  const promtLogin = async () => {
  const result = await Swal.fire({
    title: "You need to log in to continue.",
    showCancelButton: true,
    confirmButtonText: "Login",
    customClass: {
      title: "swal2-title",
    },
  });
 return result.isConfirmed
};

export const successCopy = () =>
  toast.success("The link has been copied to your clipboard!", {
    style: {
      minWidth: "fit-content",
      backgroundColor: "#333333",
      color: "#FAFAFA",
      fontSize: "16px",
    },
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#737373" d="M11.154 14.65a.94.94 0 0 1 0 1.329l-.464.464a4.689 4.689 0 0 1-6.631-6.631l1.884-1.884a4.688 4.688 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.812 2.812 0 0 0-3.857.115l-1.883 1.88a2.813 2.813 0 1 0 3.978 3.979l.464-.464a.937.937 0 0 1 1.327 0Zm5.788-11.093a4.695 4.695 0 0 0-6.632 0l-.464.464a.94.94 0 0 0 1.328 1.328l.464-.464a2.813 2.813 0 1 1 3.979 3.978l-1.884 1.885a2.812 2.812 0 0 1-3.858.112.94.94 0 1 0-1.25 1.406 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .003-6.633v-.002Z"/></svg>,
  });
