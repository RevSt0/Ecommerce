import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 18226,
  name: 'seller',
  price: 8852.5,
  productSize: 'M',
};

export const sampleWithPartialData: IProduct = {
  id: 6958,
  name: 'loss however',
  description: 'what so snake',
  price: 7361.28,
  productSize: 'S',
};

export const sampleWithFullData: IProduct = {
  id: 17183,
  name: 'given loop',
  description: 'afore of reproachfully',
  price: 32298.88,
  productSize: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'oh hm',
  price: 9729.54,
  productSize: 'XL',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
