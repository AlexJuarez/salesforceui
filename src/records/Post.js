// @flow

import { Record } from 'immutable';
import moment from 'moment';
import nextId from './nextId';

export default class Post extends Record({
  bid: 0,
  id: 0,
  text: '',
  timestamp: new Date(),
  title: '',
}) {
  bid: number;
  id: number;
  text: string;
  timestamp: Date;
  title: string;

  constructor(args?: any) {
    const bid = nextId();
    const timestamp = moment(args.timestamp);
    super({ ...args, bid, timestamp });
  }
}
