import { IOrderItem, NewOrderItem } from './order-item.model';

export const sampleWithRequiredData: IOrderItem = {
  id: 3437,
  quantity: 26006,
  totalPrice: 8703.01,
  status: 'AVAILABLE',
};

export const sampleWithPartialData: IOrderItem = {
  id: 19401,
  quantity: 4578,
  totalPrice: 23488.81,
  status: 'AVAILABLE',
};

export const sampleWithFullData: IOrderItem = {
  id: 18188,
  quantity: 29531,
  totalPrice: 8807.87,
  status: 'BACK_ORDER',
};

export const sampleWithNewData: NewOrderItem = {
  quantity: 4252,
  totalPrice: 11961.56,
  status: 'BACK_ORDER',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
