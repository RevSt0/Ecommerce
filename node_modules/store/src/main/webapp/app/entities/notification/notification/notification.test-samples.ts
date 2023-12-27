import dayjs from 'dayjs/esm';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 26921,
  date: dayjs('2023-12-26T17:43'),
  sentDate: dayjs('2023-12-27T04:07'),
  userId: 31733,
  productId: 25524,
};

export const sampleWithPartialData: INotification = {
  id: 25082,
  date: dayjs('2023-12-26T16:57'),
  sentDate: dayjs('2023-12-27T05:38'),
  userId: 20507,
  productId: 29713,
};

export const sampleWithFullData: INotification = {
  id: 23702,
  date: dayjs('2023-12-27T05:55'),
  details: 'afore',
  sentDate: dayjs('2023-12-27T05:34'),
  userId: 32529,
  productId: 19324,
};

export const sampleWithNewData: NewNotification = {
  date: dayjs('2023-12-27T08:36'),
  sentDate: dayjs('2023-12-26T23:29'),
  userId: 4381,
  productId: 17466,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
