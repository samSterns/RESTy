import React from 'react';
import styles from './History.css';

const History = () => (
  <div id="history-section">
    <aside className={styles}>
      <h1>History</h1>
      <textarea placeholder="response"></textarea>
    </aside>
  </div>
);

export default History;
