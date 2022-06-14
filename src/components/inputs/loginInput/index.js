import { ErrorMessage, useField, useFormik } from "formik";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./style.css";
const LoginInput = ({ placeholder, bottom, ...props }) => {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({query:'(min-width:850px)'})

  console.log(desktopView);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div className={desktopView ? "input_error input_error_desktop": "input_error" }style={{ transform: "translateY(3px)" }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <div className={desktopView ? "error_wrap_left":"error_wrap_top"}></div>}
        </div>
      )}

      <input
      autoComplete="off"
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && bottom && (
    
          <div className={desktopView ? "input_error input_error_desktop": "input_error" }style={{ transform: "translateY(3px)" }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (

<div className={desktopView ? "error_wrap_left":"error_wrap_bottom"}></div>

            // <div className="error_wrap_bottom"></div>
          )}
        </div>
      )}

      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && !desktopView ? "63%":"15px"}` }} />
      )}
    </div>
  );
};
export default LoginInput;
