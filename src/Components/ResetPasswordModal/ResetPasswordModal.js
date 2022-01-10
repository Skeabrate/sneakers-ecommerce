import React from 'react';
import { useAuth } from "../../hooks/useAuth"
import LoadingButton from "../LoadingButton/LoadingButton"
import styled, { keyframes } from "styled-components"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikInput from '../FormikInput/FormikInput';

const appear = keyframes`
    from{
        transform: translate(-50%, 10px);
        opacity: 0;
    } to {
        transform: translate(-50%, 0);
        opacity: 1;
    }
`

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${({theme}) => theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    box-shadow: 0px 0px 39px -6px rgba(0, 0, 0, 1);
    z-index: 100;

    animation: .2s ease-in forwards ${appear};
`

const StyledBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: transparent;

    svg{
        height: 12px;
        width: 12px;
        fill: ${({theme}) => theme.colors.white};
    }
`

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('The email address is invalid.').required('The email address is required'),
 });

const ResetPasswordModal = ({ setOpenConfirm }) => {
    const { error, setError, loading, resetPasswordHandler } = useAuth()

    return (
        <Wrapper>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={SignupSchema}
                onSubmit={values => resetPasswordHandler(values.email)}
            >
                {({ errors, touched, values }) => (
                    <Form>
                        <FormikInput 
                            name="email"
                            autoComplete="username"
                            error={error || (errors.email && touched.email)}
                            errorType={errors.email}
                            isEmpty={values.email.length}
                            setLoadingError={() => error && setError(false)}
                        />
                        
                        <LoadingButton isBlack loading={loading} label="Reset Password" />
                    </Form>
                )}
            </Formik>

            <StyledBtn onClick={() => setOpenConfirm(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </StyledBtn>
        </Wrapper>
    );
};

export default ResetPasswordModal;