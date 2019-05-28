import React from 'react';
import Header from '../Header';
import { P, H2, H3 } from './style';

function About() {
  return (
    <div>
      <Header />
      <article className="container">
        <H2>
          Job Introduction
        </H2>
        <P>
          We are looking for an enthusiastic software engineer to join the Data Solutions
          team working on Telescope.
          Telescope is an in-house analytics tool born in the BBC newsroom and growing to
          serve the rest of the organisation thanks to its friendly language and bespoke
          charting for easy to understand visual data.
        </P>
        <P>
          The tool is helping to deliver strategic organisational goals around engaging
          young audiences and expanding our global reach. We hope to support our content
          creators in their efforts by ensuring that as many of them as possible have
          the relevant audience data to hand in order to make better, quicker decisions
          about commissioning, optimisation and distribution.
        </P>
        <P>
          The Data Solutions team is made up of both engineers and data scientists,
          and we work closely together in order to ensure that we are
          delivering accurate and meaningful data to our creators.
        </P>
        <P>
          As the successful candidate, you will be joining an agile team who work in
          bi-weekly sprints, using Scrum boards, following guides and designs from our
          user experience team. You will be responsible for your own documentation and
          tests, and will use Github to commit your code to be reviewed by your peers.
          Be prepared to review other people&apos;s code too!
        </P>
        <H3>You will be using the following technologies:</H3>
        <ul>
          <li>
            <b>Front end </b>
            – React, Typescript, Styled Components (SASS), Jest, Apollo, D3
          </li>
          <li>
            <b>Back end </b>
            – NodeJS, ES2018, GraphQL, MongoDB, ElasticSearch, Redis
          </li>
          <li>
            <b>Cloud </b>
            –  AWS (EC2, S3, SQS, SES, Lambda, Cloudfront), Jenkins, Github
          </li>
          <i>
            Do not worry if you do not know all of these, just be prepared to learn!
          </i>
        </ul>
        <H3>Are you the right candidate?</H3>
        <p>
          We are looking for an engineer with a broad knowledge of web technologies
          however it is not essential for the candidate to have a computer science
          degree OR enterprise experience. We want to meet folks who have enthusiasm
          for code, enjoy the task of problem solving and have a strong willingness
          to learn. Additionally, we invite engineers who excel in backend code but
          want to level up their front end skills and vice versa.
        </p>
      </article>
    </div>
  );
}

export default About;
