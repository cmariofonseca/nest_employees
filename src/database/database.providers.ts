import * as mongoose from 'mongoose';
import { DB_PROVIDER } from 'src/constants';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://localhost/back', {
        useMongoClient: true,
      });
    },
  },
];
