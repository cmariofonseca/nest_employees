import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EMPLOYEE_MODEL_PROVIDER } from 'src/constants';

@Injectable()
export class EmployeesService {

  constructor(
    @Inject(EMPLOYEE_MODEL_PROVIDER) private employeeModel: Model<Employee>,
  ) {}

  async create(createEmplDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmplDto);
    return await createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    let employeeSelected: Employee;
    employeeSelected = await this.employeeModel.findById(id).exec();
    return employeeSelected;
  }

  async update(id: string, updateEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    let updatedEmployee: Employee;
    updatedEmployee = await this.employeeModel.findOneAndUpdate(id, updateEmployeeDto);
    return updatedEmployee;
  }

  async remove(id: string) {
    await this.employeeModel.findOneAndRemove(id);
    return { deleted: true };
  }

}
