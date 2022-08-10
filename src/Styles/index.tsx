import styled from '@emotion/styled';

// reusable styled components

export interface IStyleProps {
  width?: number;
}

export const BaseWrapperVertical = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const BaseWrapperHorizontal = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const WrapperCenter = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexMidContainer = styled.div<IStyleProps>`
  position: relative;
  display: flex;
  width: 100%;
  margin-left: auto;
  padding-left: 20px;
  margin-right:auto;
  padding-right: 20px;
  max-width:  ${ ({ width }) => width }px;
`;

export const Column = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
`;

export const Row = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: row;
`;

export const RowBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`;

export const Block = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const LogoBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  transform: translate(-25px, -50px);
`;

export const LogoModified = styled.div`
  position: relative;
  display: inline-block;
  float: left;  /* intentional */
  margin-left: 10px;
  margin-top: 4px;
  z-index: 1500;

  img {
    max-width: 34px;
  }
`;