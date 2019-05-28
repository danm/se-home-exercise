import React from 'react';
import { Link } from 'react-router-dom';

import {
  Root,
  Container,
  H1,
  Nav,
  Ul,
  Li,
} from './style';

function Header() {
  return (
    <Root>
      <Container className="container">
        <H1>Data Solutions Software Engineer Interview Exercise</H1>
        <Nav>
          <Ul>
            <Li className="link">
              <Link to="/">Home</Link>
            </Li>
            <Li className="link">
              <Link to="/about">About</Link>
            </Li>
            <Li className="link">
              <Link to="/articles">Articles</Link>
            </Li>
          </Ul>
        </Nav>
      </Container>
    </Root>
  );
}

export default Header;
