import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux-store/auth/operations';
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
   LinkPage,
} from '../Login/LoginStyled';

const RegisterPage = () => {
   const dispatch = useDispatch();
   const error = useSelector((state) => state.auth.error);

   const formik = useFormik({
      initialValues: {
         nickName: '',
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         nickName: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         password: Yup.string().required('Required'),
      }),
      onSubmit: (values, { resetForm }) => {
         dispatch(register(values));
         resetForm();
      },
   });
   return (
      <Backgrount>
         <Container
            style={{
               height: 420,
            }}
         >
            <LogoContainer style={{ paddingBottom: 0 }}>
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
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  padding: '0px 15px 15px 15px',
               }}
               onSubmit={formik.handleSubmit}
               autoComplete="off"
            >
               <LabelForm htmlFor="nickName">Username</LabelForm>
               <InputForm
                  id="nickName"
                  type="text"
                  name="nickName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nickName}
               />
               {formik.touched.nickName && formik.errors.nickName ? (
                  <div style={{ color: 'var(--error-color)' }}>{formik.errors.nickName}</div>
               ) : null}

               <LabelForm htmlFor="email">Email</LabelForm>
               <InputForm
                  id="email"
                  type="email"
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
               <ButtonSubmit type="submit">Register</ButtonSubmit>
            </form>
            <LinkPage to="/login">On login page</LinkPage>
         </Container>
      </Backgrount>
   );
};

export default RegisterPage;
