import React from "react";
import styled from "@emotion/styled";
import { BaseWrapperVertical, Row, FlexMidContainer } from "../../../Styles";

export const Heading = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #454545;
`;

export const Desciption = styled.address`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
  font-weight: 400;
  font-style: normal;
`;

export const VerticalInfo = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const RowToColumn = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

interface IValueProps {
  technology: string;
  desciption: string;
}

function Value({ technology, desciption }: IValueProps) {

  return (
    <VerticalInfo>
      <Heading>
        {technology}
      </Heading>
      <Desciption>
        {desciption}
      </Desciption>
    </VerticalInfo>
  );
}

interface IValueRowProps {
  values: Array<IValueProps>;
}

function ValueRow({ values }: IValueRowProps) {
  return (
    <Row>
      {
        values.map((valueProps) => <Value {...valueProps} />)
      }
    </Row>
  )
}

export default function AddressList() {
  return (
    <BaseWrapperVertical>
      <FlexMidContainer width={960}>
        <RowToColumn>
          <ValueRow values={[
            { technology: 'Support Key EDI Specifications and Formats', desciption: 'Synatic supports EDIs and APIs all on one platform allowing you to send and receive data using B2B EDI specific formats, such as HL7, AL3 and X12, as well as standard transport protocols, including HTTP/S, FTPS, AS2, and SFTP.' },
          ]} />
          <ValueRow values={[
            { technology: 'API that Supports EDI/B2B Communication', desciption: 'Synatic allows you to use APIs to innovate on top of EDI document standards. Enabling your business to integrate modern applications with traditional B2B protocols.' },
          ]} />
        </RowToColumn>
      </FlexMidContainer>
    </BaseWrapperVertical>
  );
}