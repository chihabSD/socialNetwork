import { Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
export default function CodeVerification({ code, setCode, error, handleCode, successMsg, sendCode}) {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters."),
  });
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please enter code that been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}

      onSubmit={() => {
              
        // handleEmailCheck(email)
        handleCode(code)
    }}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            {successMsg && <div className="sucess_text"> {successMsg} </div> } 
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              
              {/* <button type="submit" className="blue_btn" onClick={() => stepThree()}> */}
              <button onClick={() => sendCode()} className="blue_btn">
                Continue
              </button>

            </div>
            {/* {!error &&  <div className="error_text">{ error.error }</div> } */}
              
          </Form>
        )}
      
      </Formik>

    </div>
  );
}
