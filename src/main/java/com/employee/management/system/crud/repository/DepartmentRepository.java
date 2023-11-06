package com.employee.management.system.crud.repository;

import com.employee.management.system.crud.entity.department.Department;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartmentRepository extends MongoRepository<Department, String> {

    Optional<Department> findById(String s);
}
