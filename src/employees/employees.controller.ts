import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interfaces/employee.interface';

@Controller('employees')
export class EmployeesController {

  constructor(private employeeSvc: EmployeesService) {}

  @Post()
  async create(@Body() createEmplDto: CreateEmployeeDto) {
    return this.employeeSvc.create(createEmplDto);
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeSvc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeSvc.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: CreateEmployeeDto) {
    return this.employeeSvc.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeSvc.remove(id);
  }

}
