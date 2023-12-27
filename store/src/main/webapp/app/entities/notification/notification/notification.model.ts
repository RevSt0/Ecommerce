import dayjs from 'dayjs/esm';

export interface INotification {
  id: number;
  date?: dayjs.Dayjs | null;
  details?: string | null;
  sentDate?: dayjs.Dayjs | null;
  userId?: number | null;
  productId?: number | null;
}

export type NewNotification = Omit<INotification, 'id'> & { id: null };
