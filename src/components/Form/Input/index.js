import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Input({ id, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  console.log('Name: ', name);
  console.log('ID: ', id);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    // registerField({
    //   ...{
    //     name: fieldName,
    //     ref: inputRef.current,
    //     path: 'id',
    //   },
    // });
  }, [fieldName, registerField]);

  return (
    <Wrapper empty={error}>
      <input
        id={id}
        name={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {/* {console.log('Errorrr => ', error)} */}
      {error && <span>{error}</span>}
    </Wrapper>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
