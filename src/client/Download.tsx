import * as React from 'react';
const { results } = require('../../users.json');

export const Download = () => {
  const download = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  return <button onClick={() => download('users.json', JSON.stringify(results))}>Download Config</button>;
};
