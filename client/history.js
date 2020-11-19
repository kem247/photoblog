import { createMemoryHistory, createBroweserHistory } from 'history';

const history =
  process.env.NODE_ENV == 'test'
    ? createMemoryHistory
    : createBroweserHistory();

export default history;
