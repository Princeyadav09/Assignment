package com.employee.management.system.crud.controller;

import com.employee.management.system.crud.entity.department.DepartmentDTO;
import com.employee.management.system.crud.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/department")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @PostMapping("/creation")
    public ResponseEntity<?> createDepartment(@RequestBody DepartmentDTO departmentDTO){
        return departmentService.createDepartment(departmentDTO);
    }

    @PutMapping("/updation")
    public ResponseEntity<?> updateDepartment(@RequestBody DepartmentDTO departmentDTO, @RequestParam String id){
        return departmentService.updateDepartment(departmentDTO,id);
    }

    @GetMapping
    public ResponseEntity<?> getDepartment(@RequestParam String id){
        return departmentService.getDepartment(id);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteDepartment(@RequestParam String id){
        return departmentService.deleteDepartment(id);
    }
}
