import React from 'react';
import styled from '@emotion/styled'

export const VerticalStack = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 50px;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #d8d8d8;
  background-color: #ffffff;
`;

export const NavSlot = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
`;

export const SynaticPurpleBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  flex-direction: column;
  /* background-color: #251b99;
  z-index: 100; */
`;

export default function NavColumn() {
  return (
    <VerticalStack>
      <NavSlot>
        <SynaticPurpleBlock/>
      </NavSlot>
      <NavSlot>
      </NavSlot>
    </VerticalStack>
  );
}
