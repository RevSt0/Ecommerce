import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 19246,
  name: 'oh amuse',
};

export const sampleWithPartialData: IProductCategory = {
  id: 20492,
  name: 'admin brief',
  description: 'ack psst brightly',
};

export const sampleWithFullData: IProductCategory = {
  id: 8876,
  name: 'unnaturally',
  description: 'flush phew yowza',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'hopelessly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
