import React, { useEffect } from 'react';
import bgImage from '../../assets/image.png';
import icon from '../../assets/logo.png';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { postData, resetLoginState, clearErrorMessage } from '../Redux/apiSlice';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errorMessage, loggedIn } = useSelector((state) => state.api);
    const [messageApi, contextHolder] = message.useMessage();

    const showError = () => {
        messageApi.open({
            type: 'error',
            content: 'Invalid email or password',
          
        });
        dispatch(clearErrorMessage());
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('/home');
            dispatch(resetLoginState());
        } else if (errorMessage) {
            showError();
        }
    }, [loggedIn, errorMessage, navigate, dispatch]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8).required('Password is required'),
        }),
        onSubmit: (values) => {
            dispatch(postData(values));
        },
    });

    return (
        <div className="w-full h-full flex">
            <div className="w-1/2 lg:block hidden">
                <img src={bgImage} alt="Background" className="w-screen h-screen" />
            </div>
            <div className="lg:w-1/2 h-screen flex justify-center items-center">
                <div className="w-1/2 space-y-6">
                    <img src={icon} alt="Logo" className="w-full" />
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <p className="text-blue-900 font-semibold text-3xl">Login</p>
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="m@example.com"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-600 text-sm">{formik.errors.email}</div>
                            )}
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="********"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-600 text-sm">{formik.errors.password}</div>
                            )}
                        </div>
                        <div>
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                    <div className='flex '>
                    {contextHolder}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
