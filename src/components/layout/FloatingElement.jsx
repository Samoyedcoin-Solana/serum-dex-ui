import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  border-radius: 25px;
  padding: 20px;
  background-color: #131a36;
  border: 2px solid #fff;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
