import fetch from 'dva/fetch';

export function getTest(id) {
  console.log(id);
  return fetch('/test');
}
