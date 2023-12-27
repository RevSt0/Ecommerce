import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 9394,
  date: dayjs('2023-12-26T20:02'),
};

export const sampleWithPartialData: IShipment = {
  id: 6694,
  trackingCode: 'psst',
  date: dayjs('2023-12-27T11:29'),
  details: 'yearningly recall disastrous',
};

export const sampleWithFullData: IShipment = {
  id: 25167,
  trackingCode: 'gah',
  date: dayjs('2023-12-27T03:03'),
  details: 'pulverize phew round',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2023-12-27T02:04'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
