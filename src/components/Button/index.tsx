import React, { FC, useState, useEffect } from 'react';
import { TextField } from '~/components/TextField';
import { request, ResponseInterceptor } from '~/config/request';
import { ButtonStyled } from './style';
import { ButtonProps } from './types';
// import MockAdapter from 'axios-mock-adapter';

// const mock = new MockAdapter(request);

// mock.onGet('/users').reply(200, {
//   users: [{ id: 1, name: 'John Smith' }],
// });

export const Button: FC<ButtonProps> = ({ label }) => {
  const [data, setData] = useState('nada');

  useEffect(() => {
    const getData = async () => {
      const { data } = await request.get<unknown, ResponseInterceptor<{ data: Array<{ first_name: string }> }>>(
        'https://reqres.in/api/users?page=2'
      );
      // const { data } = await request.get<unknown, ResponseInterceptor<{ users: Array<{ id: number; name: string }> }>>(
      //   '/users'
      // );

      setData(data.data[0].first_name);
      // setData(data.users[0].name);
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
