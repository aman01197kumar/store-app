import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Modal = ({ showModal, setShowModal }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const modalRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (showModal) {
      modalRef.current.showModal(); // Open the modal when showModal is true
    } else {
      modalRef.current?.close(); // Close the modal when showModal is false
    }
  }, [showModal]);

  const loginHandler = async () => {
    try {
      const userLogin = {
        email: userEmail,
        password: userPassword,
      };

      const response = await axios.post(
        "http://localhost:4001/user/login/",
        userLogin
      );
      if (response?.data?.status === 200)
        toast.success(response?.data?.message);
      else if (response?.data?.status === 400)
        toast.success(response?.data?.message);
      else if (response?.data?.status === 401)
        toast.success(response?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <dialog ref={modalRef} id="my_modal_2" className="modal">
      <div className="modal-box space-y-5">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg text-center">Login</h3>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        <div className="flex justify-end space-x-5">
          <button className="btn btn-secondary" onClick={loginHandler}>
            Login
          </button>
          <button
            className="btn btn-warning text-white"
            onClick={() => navigate("signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </dialog>
  );
};

export default Modal;
