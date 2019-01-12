import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interfaces/employee.interface';

@Controller('employees')
export class EmployeesController {

  constructor(private employeeSvc: EmployeesService) {}

  @Post()
  create(@Body() createEmplDto: CreateEmployeeDto) {
    this.employeeSvc.create(createEmplDto);
    return { status: 'employee created' };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedEmployee: CreateEmployeeDto) {
    this.employeeSvc.update(id, updatedEmployee);
    return { status: 'employee updated' };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.employeeSvc.remove(id);
    return { status: 'employee deleted' };
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return await this.employeeSvc.findAll();
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeSvc.findOne(id);
  }*/

}
