import dayjs from 'dayjs/esm';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 16432,
  code: 'stair',
  date: dayjs('2023-12-27T10:18'),
  status: 'PAID',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2023-12-27T03:44'),
  paymentAmount: 32171.07,
};

export const sampleWithPartialData: IInvoice = {
  id: 4435,
  code: 'sadly',
  date: dayjs('2023-12-26T19:15'),
  status: 'PAID',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2023-12-27T11:05'),
  paymentAmount: 29331.75,
};

export const sampleWithFullData: IInvoice = {
  id: 8512,
  code: 'gah',
  date: dayjs('2023-12-27T09:25'),
  details: 'moisturize',
  status: 'PAID',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2023-12-27T04:10'),
  paymentAmount: 19453.72,
};

export const sampleWithNewData: NewInvoice = {
  code: 'dangerous phew putt',
  date: dayjs('2023-12-27T07:35'),
  status: 'ISSUED',
  paymentMethod: 'CASH_ON_DELIVERY',
  paymentDate: dayjs('2023-12-27T05:01'),
  paymentAmount: 14163.88,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
