package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.IMonthlyLeave;
import com.noobstack.jewellery.model.Employee;
import com.noobstack.jewellery.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface LeaveRepository extends JpaRepository<Leave, UUID> {
    Leave findByReason(String reason);

    @Query("select l " +
            "from Leave l, Employee e " +
            "where l.employee = e and e.emp_id= ?1 and l.leaveFrom BETWEEN ?2 and ?3")
    List<Leave> findByDate(UUID eid, LocalDate d1, LocalDate d2);

    @Query("select e.emp_id as emp_id, e.fname as fname, e.lName as lName,sum(l.leaveTo-l.leaveFrom+1) as sum " +
            "from Leave as l,Employee as e " +
            "where l.employee = e and l.leaveFrom between ?1 and ?2 " +
            "Group BY e.emp_id, e.fname, e.lName")
    List<IMonthlyLeave> getSum(LocalDate d1, LocalDate d2);

    @Query("select e.emp_id as emp_id, e.fname as fname, e.lName as lName,sum(l.leaveTo-l.leaveFrom+1) as sum " +
            "from Leave as l,Employee as e " +
            "where l.employee = e and l.leaveFrom between ?1 and ?2 and e.emp_id = ?3 " +
            "Group BY e.emp_id, e.fname, e.lName")
    List<IMonthlyLeave> getSumWithId(LocalDate d1, LocalDate d2, UUID id);

    @Query("select l " +
            "from Leave l,Employee e " +
            "where l.employee = e and l.leaveTo between ?1 and ?2 " +
            "ORDER BY l.leaveFrom desc")
    List<Leave> findByLeaveBetween(LocalDate d1, LocalDate d2);
    List<Leave> findByEmployee(Employee employee);

}
