import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import { P, H2 } from './style';

function Home() {
  return (
    <div>
      <Header />
      <article className="container">
        <H2>
          Welcome
        </H2>
        <P>
          This repo has been created as an at home exercise for Data Solutions
          software engineer candidates. Click here to see the
          <Link to="/about/"> job spec</Link>
          .
        </P>
        <P>
          Visit
          <a href="https://github.com/danm/se-home-exorcise/issues"> Github issues </a>
          to see a choice of possible tasks for this exercise.
          Choose a maximum of 2 tasks and limit yourself to just 2 hours.
          Don&apos;t worry if you havn&apos;t finished, commit your code and be ready
          to talk about the changes you have made in a face to face interview.
          Quality of execution is more important than quantity of it.
        </P>
        <h5>Things to think about</h5>
        <ul>
          <li>Accessibility</li>
          <li>Browser compatibility</li>
          <li>Tests</li>
          <li>Types</li>
          <li>Comments</li>
        </ul>
      </article>
    </div>
  );
}

export default Home;
