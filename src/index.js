/* eslint no-unused-vars:0 */
import _, { divide } from 'lodash';
import './style.css';
import displayComments from './comment'

const addComment = document.querySelectorAll('.add-btn');

addComment.forEach((btn) => {
  btn.addEventListener('click', () => {
      displayComments();
  });
});

