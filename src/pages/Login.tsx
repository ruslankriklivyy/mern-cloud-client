import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducers/userReducer';

type FormData = {
  email: string;
  password: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 360,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    title: {
      textAlign: 'center',
    },
    formBtn: {
      marginTop: 12,
      width: '100%',
      height: 40,
    },
    input: {
      width: '100%',
      marginTop: 12,
    },
    error: {
      color: 'red',
    },
  }),
);

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is a required field')
    .matches(
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      'Email must be validate',
    ),
  password: yup
    .string()
    .required('Password is a required field')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => dispatch(loginUser(data)));

  return (
    <form className={classes.root} autoComplete="off">
      <Typography className={classes.title} variant="h4" component="h2">
        Авторизация
      </Typography>
      <TextField
        label="Введите адрес электронной почты"
        className={classes.input}
        id="outlined-basic"
        variant="outlined"
        {...register('email')}
      />
      <p className={classes.error}>{errors.email?.message}</p>
      <TextField
        label="Введите пароль"
        className={classes.input}
        id="outlined-basic"
        variant="outlined"
        {...register('password')}
      />
      <p className={classes.error}>{errors.password?.message}</p>
      <Button
        type="button"
        onClick={onSubmit}
        className={classes.formBtn}
        variant="contained"
        color="primary">
        Войти
      </Button>
    </form>
  );
};

export default Login;
