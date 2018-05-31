import React from 'react';

export default ({ base_title: number, title_tag_line: vs, arena, location }) =>
  <span><br /><h4>{number} {vs}</h4>{arena} {location}</span>;
