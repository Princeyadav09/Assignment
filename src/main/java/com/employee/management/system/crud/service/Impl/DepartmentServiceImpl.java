package com.employee.management.system.crud.service.Impl;

import com.employee.management.system.crud.entity.department.Department;
import com.employee.management.system.crud.entity.department.DepartmentDTO;
import com.employee.management.system.crud.repository.DepartmentRepository;
import com.employee.management.system.crud.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    DepartmentRepository departmentRepository;

    @Override
    public ResponseEntity<?> createDepartment(DepartmentDTO departmentDTO){
        try {
            Department dep = new Department();
            dep.setDepartmentName(departmentDTO.getDepartmentName());
            dep.setCreatedAt(new Date());
            departmentRepository.save(dep);
            return new ResponseEntity<Object>(dep, HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Department not created.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> updateDepartment(DepartmentDTO departmentDTO,String id){
        try{
            Optional<Department> depOpt = departmentRepository.findById(id);
            Department dep = depOpt.get();
            dep.setDepartmentName(departmentDTO.getDepartmentName());
            dep.setUpdatedAt(new Date());
            departmentRepository.save(dep);
            return new ResponseEntity<Object>(dep, HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Department not updated.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getDepartment(String id){
        try{
            Optional<Department> depOpt = departmentRepository.findById(id);
            Department dep = depOpt.get();
            return new ResponseEntity<Object>(dep, HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Error in retrieval.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> deleteDepartment(String id){
        try{
            Optional<Department> depOpt = departmentRepository.findById(id);
            Department dep = depOpt.get();
            departmentRepository.delete(dep);
            return new ResponseEntity<Object>("Successfully deleted department", HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<Object>("Error in deletion.", HttpStatus.BAD_REQUEST);
        }
    }
}
