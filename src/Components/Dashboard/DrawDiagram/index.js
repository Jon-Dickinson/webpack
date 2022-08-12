import React from "react";
import { BaseWrapper } from "../../../Styles";
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';

const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
    { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
    { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
    { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
    { id: 'node-5', content: 'Node 5', coordinates: [600, 200], },
  ],
  links: [
    { input: 'node-1',  output: 'node-2', label: 'Link 1' },
    { input: 'node-1',  output: 'node-3', label: 'Link 2' },
    { input: 'node-1',  output: 'node-4', label: 'Link 3' },
    { input: 'node-1',  output: 'node-5', label: 'Link 4' },
  ]
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: 'calc(100% - 55px)' }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default function DrawDiagram() {
  return (
    <BaseWrapper className="padding-all-20">
      <UncontrolledDiagram/>
    </BaseWrapper>
  );
}