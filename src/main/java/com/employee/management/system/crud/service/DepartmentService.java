package com.employee.management.system.crud.service;

import com.employee.management.system.crud.entity.department.DepartmentDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface DepartmentService {

    ResponseEntity<?> createDepartment(DepartmentDTO departmentDTO);

    ResponseEntity<?> updateDepartment(DepartmentDTO departmentDTO,String id);

    ResponseEntity<?> getDepartment(String id);

    ResponseEntity<?> deleteDepartment(String id);
}
