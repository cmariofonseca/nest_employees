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

  async create(createEmplDto: CreateEmployeeDto) {
    const createdEmployee = new this.employeeModel(createEmplDto);
    await createdEmployee.save();
  }

  async update(id: string, updatedEmployee: CreateEmployeeDto) {
    await this.employeeModel.updateOne(
      { _id: id },
      {
        $set: {
          name: updatedEmployee.name,
          position: updatedEmployee.position,
          office: updatedEmployee.office,
          salary: updatedEmployee.salary,
        },
      },
    );
  }

  async remove(id: string) {
    await this.employeeModel.deleteOne({ _id : id });
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  // This method find one employee
  /* async findOne(id: string): Promise<Employee> {
    let employeeSelected: Employee;
    employeeSelected = await this.employeeModel.findById(id).exec();
    return employeeSelected;
  } */

}
