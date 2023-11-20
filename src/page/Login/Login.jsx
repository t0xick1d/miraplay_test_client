import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux-store/auth/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as ReactLogo } from '../../img/start.svg';

import {
   Backgrount,
   Container,
   LogoContainer,
   LogoTitle,
   LogoText,
   LabelForm,
   InputForm,
   ButtonSubmit,
} from './LoginStyled';

const LoginPage = () => {
   const dispatch = useDispatch();
   const error = useSelector((state) => state.auth.error);

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string().email('Invalid email address').required('Required'),
         password: Yup.string().required('Required'),
      }),
      onSubmit: (values, { resetForm }) => {
         dispatch(logIn(values));

         resetForm();
      },
   });

   return (
      <Backgrount>
         <Container>
            <LogoContainer>
               <ReactLogo />
               <div
                  style={{
                     justifyContent: 'center',
                     alialignItems: 'center',
                     marginLeft: -25,
                  }}
               >
                  <LogoTitle>Miraplay</LogoTitle>
                  <LogoText>Cloud Gaming</LogoText>
               </div>
            </LogoContainer>
            <form
               onSubmit={formik.handleSubmit}
               autoComplete="off"
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  padding: 15,
               }}
            >
               <LabelForm htmlFor="email">Email</LabelForm>
               <InputForm
                  id="email"
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: 'var(--error-color)' }}>{formik.errors.email}</div>
               ) : null}
               <LabelForm htmlFor="password">Password</LabelForm>
               <InputForm
                  id="password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
               />
               {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: 'var(--error-color)' }}>{formik.errors.password}</div>
               ) : null}
               {error ? <div style={{ color: 'var(--error-color)' }}>{error}</div> : ''}
               <ButtonSubmit type="submit">Log In</ButtonSubmit>
            </form>
         </Container>
      </Backgrount>
   );
};

export default LoginPage;
