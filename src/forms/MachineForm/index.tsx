import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { MachineFormProps } from './types';

export const MachineForm = ({ label }: MachineFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: 'joao',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>{label}</h1>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};
