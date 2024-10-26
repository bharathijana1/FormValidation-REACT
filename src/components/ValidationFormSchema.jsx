import * as yup from 'yup';

export const ValidationSchemaLoginForm = yup.object().shape({
  uname: yup
  .string()
  .required("*Enter a name"),
  password: yup
  .string()
  .min(4, "Password must be at least 4 characters")
  .max(8, "Password must not exceed 8 characters")
  .required("*Enter a password"),

//   confirmPassword: yup.string()
//     .oneOf([yup.ref('password'), null], "Passwords must match")
//     .required("Confirm your password"),
});

export const ValidationSchemaSignupForm = yup.object().shape({
    uname: yup
    .string()
    .required("*Enter a name"),
    email: yup
    .string()
    .email("Enter a valid email")
    .required("*Enter an email"),
    email: yup
    .string()
    .email("Enter a valid email")
    .required("*Enter an email"),
    
    phone_no: yup
    .string()
    .min(10, "Password must not exceed 10 number")
    .required("*Enter a phone no"),
    
    password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(8, "Password must not exceed 8 characters")
    .required("*Enter a password"),
    
    confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("*Confirm your password"),
  
  });

  export const ValidationSchemaForgotpassword = yup.object().shape({
    uname: yup
    .string()
    .required("*Enter a name"),
    email: yup
    .string()
    .email("Enter a valid email")
    .required("*Enter an email"),
 
  
  //   confirmPassword: yup.string()
  //     .oneOf([yup.ref('password'), null], "Passwords must match")
  //     .required("Confirm your password"),
  });
  export const ValidationSchemaResetpassword = yup.object().shape({
    password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(8, "Password must not exceed 8 characters")
    .required("*Enter a password"),
    
    confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("*Confirm your password"),
  });
  
