/* eslint no-unused-vars:0 */
import _ from 'lodash';
import './style.css';
import add from './addcomment';

import call from './getData';
import populate from './populate';

document.addEventListener('DOMContentLoaded', async () => {
  populate(await call()); // Call for the remote API
});
