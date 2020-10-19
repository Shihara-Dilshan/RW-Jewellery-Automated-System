package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.CustomerRentals;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.model.Sellable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CustomerRentalRepository extends JpaRepository<CustomerRentals, UUID> {

    public static final String FIND_DAYS = "SELECT * FROM customer_rentals";
    @Query(value = FIND_DAYS, nativeQuery = true)
    public List<CustomerRentals> findDate();


    @Query("select c " +
            "from CustomerRentals c " +
            "where c.rentalDate BETWEEN ?1 and ?2 "+
             "ORDER BY c.rentalDate desc"   )
    List<CustomerRentals> findByDate(LocalDate d1, LocalDate d2);

}
