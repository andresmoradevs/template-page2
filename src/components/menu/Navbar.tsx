import React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo.png';
import Bar from './Bar';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo}/>
      </S.Nav>
      <Bar />
      {props.children}
    </>
  )
}