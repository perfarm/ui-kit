import React, { FC, useState, useEffect } from 'react';
import { TextField } from '~/components/TextField';
import { request, ResponseInterceptor } from '~/config/request';
import { ButtonStyled } from './style';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ label }) => {
  const [data, setData] = useState('nada');

  useEffect(() => {
    const getData = async () => {
      const { data } = await request.get<unknown, ResponseInterceptor<{ data: Array<{ first_name: string }> }>>(
        'https://reqres.in/api/users?page=2'
      );

      setData(data.data[0].first_name);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getData();
  }, []);

  return (
    <ButtonStyled>
      {data}
      {label}
      <TextField />
    </ButtonStyled>
  );
};
