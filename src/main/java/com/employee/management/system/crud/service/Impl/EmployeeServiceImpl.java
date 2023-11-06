package com.employee.management.system.crud.service.Impl;


import com.employee.management.system.crud.entity.employee.Employee;
import com.employee.management.system.crud.entity.employee.EmployeeDTO;
import com.employee.management.system.crud.repository.EmployeeRepository;
import com.employee.management.system.crud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public ResponseEntity<?> createEmployee(EmployeeDTO employeeDTO){

        try{
            Employee emp = new Employee();
            emp.setEmail(employeeDTO.getEmail());
            emp.setFirstName(employeeDTO.getFirstName());
            emp.setLastName(employeeDTO.getLastName());
            emp.setCreatedAt(new Date());
            employeeRepository.save(emp);
            return new ResponseEntity<Object>(emp, HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Employee not created.", HttpStatus.BAD_REQUEST);
        }

    }

    @Override
    public ResponseEntity<?> updateEmployee(EmployeeDTO employeeDTO,Long id){
        try{
            Optional<Employee> empOpt = employeeRepository.findById(id);
            Employee emp = empOpt.get();
            emp.setFirstName(employeeDTO.getFirstName());
            emp.setLastName(employeeDTO.getLastName());
            emp.setEmail(employeeDTO.getEmail());
            emp.setUpdatedAt(new Date());
            employeeRepository.save(emp);
            return new ResponseEntity<Object>("Employee data updated.", HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Error in update.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getEmployeeById(Long id){
        try{
            Optional<Employee> empOpt = employeeRepository.findById(id);
            Employee emp = empOpt.get();
            return new ResponseEntity<>(emp,HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Error in retrieve data.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> deleteEmployee(Long id) {
        try{
            Optional<Employee> empOpt = employeeRepository.findById(id);
            Employee emp = empOpt.get();
            employeeRepository.delete(emp);
            return new ResponseEntity<>("Successfully employee deleted",HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Error in deletion.", HttpStatus.BAD_REQUEST);
        }
    }

}
