import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 9565,
  firstName: 'Isabell',
  lastName: 'Casper',
  gender: 'OTHER',
  email: ':W~VF@h.AnB',
  phone: '440.815.8545 x77743',
  addressLine1: 'that limply',
  city: 'New Lethafield',
  country: 'Isle of Man',
};

export const sampleWithPartialData: ICustomer = {
  id: 28835,
  firstName: 'Ruben',
  lastName: 'Hauck',
  gender: 'FEMALE',
  email: 'Ek3Hx@PzuX.Zc',
  phone: '378.441.8737 x3141',
  addressLine1: 'gregarious poor',
  addressLine2: 'why pish',
  city: 'Gilbert',
  country: 'Reunion',
};

export const sampleWithFullData: ICustomer = {
  id: 21666,
  firstName: 'Verla',
  lastName: 'Ratke',
  gender: 'OTHER',
  email: 'Z@d.99oz1',
  phone: '560.719.8251',
  addressLine1: 'outside',
  addressLine2: 'mmm mmm',
  city: 'Lednercester',
  country: 'Angola',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Tia',
  lastName: 'Hickle',
  gender: 'OTHER',
  email: '*2dr@?P?.IH7`',
  phone: '(622) 816-4815 x06435',
  addressLine1: 'ugh gee',
  city: 'Streichhaven',
  country: 'Antigua and Barbuda',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
