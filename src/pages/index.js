import { connect } from 'dva';
import styles from './index.css';

function Index({ dispatch, index }) {
  console.log(index);
  function stop(event) {
    console.log(event.target.href);
    event.preventDefault();
  }
  function change() {
    dispatch({ type: 'index/fetch', payload: { id: 1233 } });
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js 123456</code> and save to reload.
        </li>
        <li>
          <a onClick={stop} href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <span>{index.test}</span>
      <span>{index.abc}</span>
      <button onClick={change}>click me</button>
    </div>
  );
}

export default connect(({ index }) => ({
  index,
}))(Index);
