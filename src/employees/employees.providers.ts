import { Connection } from 'mongoose';
import { EmployeeSchema } from './schemas/employee.schema';
import { DB_PROVIDER, EMPLOYEE_MODEL_PROVIDER } from 'src/constants';

export const EmployeesProviders = [
  {
    provide: EMPLOYEE_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Employee', EmployeeSchema),
    inject: [DB_PROVIDER],
  },
];
