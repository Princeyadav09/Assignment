package com.employee.management.system.crud.service;

import com.employee.management.system.crud.entity.employee.EmployeeDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface EmployeeService {

    ResponseEntity<?> createEmployee(EmployeeDTO employeeDTO);

    ResponseEntity<?> updateEmployee(EmployeeDTO employeeDTO,Long id);

    ResponseEntity<?> getEmployeeById(Long id);

    ResponseEntity<?> deleteEmployee(Long id);

}
