import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import Controller from './Controller';
import FloatRightStyle from './FloatRightStyle';
import JumboSizer from './JumboSizer';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const Nav = () => {
  const [show, changeShow] = useState(true);

  return (
    <div>
      <Container>
        <JumboSizer>
          <Jumbotron>
            {!show && (
              <Button onClick={() => changeShow(true)}>Show Navigation</Button>
            )}
            <Toast show={show} onClose={() => changeShow(false)}>
              <Toast.Header>
                <strong>Navigation:</strong>
              </Toast.Header>
              <Toast.Body>
                <ul>
                  <Link to="/">HOME</Link>
                  <br />
                  <Link to="/info">HELP</Link>
                  <br />
                  <Link to="/index">FX PRESET BANK</Link>
                  <br />
                  <Link to="/index/new">FX EDIT/SAVE PRESET</Link>
                  <br />
                </ul>
              </Toast.Body>
            </Toast>
          </Jumbotron>
        </JumboSizer>
      </Container>
      <FloatRightStyle>
        <Controller />
      </FloatRightStyle>
    </div>
  );
};

export default Nav;
