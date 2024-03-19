import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container=styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
const Contents=styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
`;
/*
const Label=styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;*/
const Title =styled.div`
  margin-bottom:32px;
`;

function App() {
  const [counter, setCounter]=useState(0);
  const sub = () => {
    setCounter(counter-1);
  };
  const add = () => {
    setCounter(counter+1);
  };
  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={sub}/>
        <Label data={counter} />
        <Button label="+" onClick={add}/>
      </Contents>
    </Container>
  );
}

export default App;
