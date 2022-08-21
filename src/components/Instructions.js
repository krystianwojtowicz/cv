import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
function Instructions() {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast(
      " Hover over the areas of the resume to find Edit and Add buttons. Edit your information in the form fields and submit your edits. Add your Education, Experience and Skills, separate duties using comma",
      { position: toast.POSITION.TOP_CENTER }
    );
  };
  return (
    <>
      {/* <button onClick={notify}>Instructions</button> */}
      <ToastContainer />
    </>
  );
}

export default Instructions;

// import React from 'react';

// function App() {
//   const greeting = 'Hello Function Component!';

//   return <h1>{greeting}</h1>;
// }

// export default App;
