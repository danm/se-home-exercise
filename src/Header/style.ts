import styled from 'styled-components';

const Root = styled.div`
  background-color: #1f1c1f;
`;

const Container = styled.div``;

const Nav = styled.nav``;

const H1 = styled.h1`
  color: white;
  padding: 20px 0 0 0;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 20px 0;
`;

const Li = styled.li`
  display: inline;
  padding-right: 4px;

  &.link > * {
    color: #BDBDFF;
    font-size: 22px;
    padding: 10px;
    :hover {
      text-decoration: none;
      background-color: white;
      color: black;
    }
  }
`;

export {
  Root,
  Container,
  H1,
  Nav,
  Ul,
  Li,
};
