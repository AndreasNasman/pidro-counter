import React, { FunctionComponent, ReactElement } from 'react';
import { MdRedo, MdReplay, MdUndo } from 'react-icons/md';
import { Container, IconWrapper } from './styles';
import { IProps } from './types';

export const Toolbar: FunctionComponent<IProps> = ({
  resetScore,
}: IProps): ReactElement => (
  <Container>
    <IconWrapper>
      <MdUndo />
    </IconWrapper>
    <IconWrapper onClick={resetScore}>
      <MdReplay />
    </IconWrapper>
    <IconWrapper>
      <MdRedo />
    </IconWrapper>
  </Container>
);
