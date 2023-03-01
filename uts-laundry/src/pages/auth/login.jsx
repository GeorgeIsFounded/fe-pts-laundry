import React from 'react';
import Input from '../../komponen/input';
import Laundry from '../../images/laundry.jpeg';
import Laundry2 from '../../images/laundry.jpg';
import Laundry3 from '../../images/clothe1.jpg';
import Laundry4 from '../../images/clothe2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/action/authAction';

const Login = () => {
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    username: '',
    password: '',
  });
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must have 8 lenght')
      .required('Required'),
  });
  let navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="bg-black h-full w-full p-10 rounded-lg flex justify-between">
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[500px] p-5">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-medium">Login</h1>
            <div className="h-2 bg-black w-[50px] rounded-xl"></div>
          </div>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{ username: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Required';
              } 
              if (!values.password) {
                errors.password = 'Required';
              }
              return errors;
            }}
            onSubmit={ async(values, { setSubmitting }) => {
              try {
                setIsLoading(true);
                const response = await dispatch(authLogin(payload));
                if (response?.status === 'berhasil') {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
                  return navigate('/home', { replace: true });
                } else {
                  const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer);
                      toast.addEventListener('mouseleave', Swal.resumeTimer);
                    },
                  });
          
                  Toast.fire({
                    icon: 'error',
                    title: 'Check again',
                  });
                }
              } catch (err) {
                console.log(err);
              } finally {
                setIsLoading(false);
              }
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="pt-20 h-[270px] space-y-5"
              >
                <div className="flex items-center space-x-[160px] w-[600px]">
                  <div>
                    <Input
                      value={values.username}
                      type="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={'username'}
                      name="username"
                    />
                    <h1 className="text-red-500">
                      {errors.username && touched.username && errors.username}
                    </h1>
                  </div>
                  <div className="h-2 bg-black w-[30px] rounded-xl"></div>
                </div>
                <div className="flex items-center space-x-[160px] w-[600px]">
                  <div>
                    <Input
                      value={values.password}
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={'Password'}
                      name="password"
                    />
                    <h1 className="text-red-500">
                      {errors.password && touched.password && errors.password}
                    </h1>
                  </div>
                  <div className="h-2 bg-black w-[30px] rounded-xl"></div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      return navigate('/forgotPassword');
                    }}
                    className="text-gray-400 text-sm font-thin"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="flex mt-20 items-center space-x-24">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black w-72 h-16  text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150"
                  >
                    Sign In
                  </button>
                  {/* <GiWashingMachine
              size={60}
              className="p-0 hover:h-[65px] hover:w-[65px] duration-150"
            /> */}
                </div>
              </form>
            )}
          </Formik>
          <div className="flex justify-center mt-60">
            Don't have anny account yet?{' '}
            <button
              className="hover:border-b-2 hover:border-black duration-100"
              onClick={() => {
                return navigate('/Register');
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[850px] p-5">
          <Swiper
            className="w-full h-full"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{ delay: 2000 }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect=""
          >
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px] rounded-lg" src={Laundry} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px] rounded-lg" src={Laundry2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px] rounded-lg" src={Laundry3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px] rounded-lg" src={Laundry4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Login;
