/* eslint no-unused-vars:0 */
import _, { divide } from 'lodash';
import './style.css';

import call from './getData';
import populate from './populate';

document.addEventListener('DOMContentLoaded', async () => {
  populate(await call()); // Call for the remote API
});

// event listener for add comment
