/* eslint-disable no-undef */
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // TODO: fix eslint errors
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const testobject = {
    name: 'Caglayan',
  };
  console.log(testobject);

  return element;
}

document.body.appendChild(component());
