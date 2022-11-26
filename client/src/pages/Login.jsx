// import { login } from '@/features/userSlice';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// import { useDispatch } from 'react-redux';

// function Login() {
//   const user = { name: 'John', email: 'jonh@gmail' };
//   const schema = yup.object().shape({
//     email: yup.string().email().required(),
//     password: yup.string().min(8).max(32).required()
//   });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm({
//     resolver: yupResolver(schema)
//   });
//   const onSubmitHandler = (data) => {
//     console.log({ data });
//     reset();
//   };
//   const dispatch = useDispatch();
//   const handleOnClick = () => {
//     dispatch(login(user));
//   };
//   return <form onSubmit={handleSubmit(onSubmitHandler)}>Login</form>;
// }

// export default Login;
