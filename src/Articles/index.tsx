import React from 'react';

import Header from '../Header';
import { IData } from './types';
import { Table, H2 } from './style';

// continue to use commonjs till ts better supports esmodules, json and types.
const data1: IData = require('../data/r1.json');
const data2: IData = require('../data/r2.json');

function Articles() {
  // merge our data sets
  const analytics = data1.hits.hits.concat(data2.hits.hits);

  // limit to the first 25
  const analyticsLimited = analytics.slice(0, 25);

  // create a table row with mapped properties from analytics
  const rows = analyticsLimited.map(({ _source }) => (
    <tr key={`${_source.cpsid}-${_source.l1}-${_source.date}`}>
      <td>{_source.cpsid}</td>
      <td>{_source.l1}</td>
      <td>{ new Date(_source.date).toLocaleString() }</td>
      <td>{_source.views}</td>
      <td>{_source.siteName}</td>
      <td>{_source.type}</td>
      <td>{_source.sectionName}</td>
      <td>{_source.headline}</td>
      <td>{ new Date(_source.firstPublished).toLocaleString() }</td>
    </tr>
  ));

  return (
    <div>
      <Header />
      <article className="container">
        <H2>
          Articles
        </H2>
        <Table>
          <thead>
            <tr>
              <th>cpsid</th>
              <th>l1</th>
              <th>date</th>
              <th>views</th>
              <th>siteName</th>
              <th>type</th>
              <th>sectionName</th>
              <th>headline</th>
              <th>firstPublished</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </Table>
      </article>
    </div>
  );
}

export default Articles;
