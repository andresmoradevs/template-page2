import React, { useState } from 'react';
import * as S from './styles';

import RightNav from './RightNav';

const Bar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.StyledBar open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBar>
      <RightNav open={open} />
    </>
  )
}
export default Bar