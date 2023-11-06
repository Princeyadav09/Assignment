package com.employee.management.system.crud.controller;

import com.employee.management.system.crud.entity.employee.EmployeeDTO;
import com.employee.management.system.crud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/creation")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.createEmployee(employeeDTO);
    }

    @PutMapping("/updation")
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeDTO employeeDTO,@RequestParam Long id){
        return employeeService.updateEmployee(employeeDTO,id);
    }

    @GetMapping
    public ResponseEntity<?> getEmployeeById(@RequestParam Long id){
        return employeeService.getEmployeeById(id);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteEmployee(@RequestParam Long id){
        return employeeService.deleteEmployee(id);
    }

}
