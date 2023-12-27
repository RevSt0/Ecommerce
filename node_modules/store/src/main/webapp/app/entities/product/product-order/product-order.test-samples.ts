import dayjs from 'dayjs/esm';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 1660,
  placedDate: dayjs('2023-12-26T23:37'),
  status: 'COMPLETED',
  code: 'cheerful',
  customer: 'safely tension',
};

export const sampleWithPartialData: IProductOrder = {
  id: 19849,
  placedDate: dayjs('2023-12-27T06:37'),
  status: 'CANCELLED',
  code: 'quicker snivel',
  customer: 'rake unusual thrash',
};

export const sampleWithFullData: IProductOrder = {
  id: 25868,
  placedDate: dayjs('2023-12-26T19:23'),
  status: 'PENDING',
  code: 'after that',
  invoiceId: 20598,
  customer: 'yet',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2023-12-26T17:35'),
  status: 'COMPLETED',
  code: 'thoroughly gosh',
  customer: 'to',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
