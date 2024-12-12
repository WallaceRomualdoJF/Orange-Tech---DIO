import React from 'react'
import { Controller } from "react-hook-form";
import { IInput } from './types'

import {InputContainer, InputText, IconContainer } from './styles';

const Input = ({leftIcon, name, control, ...rest} : IInput) => {


  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field: {value, onChange} }) =>  <InputText value={value} onChange={onChange} {...rest} />}
      />
    </InputContainer>
    )
}

export { Input }; 