package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface DeliverRepository extends JpaRepository<Delivery, UUID> {

    List<Delivery> findByDeliverBoy(DeliverBoy deliverBoy);
    List<Delivery> findByStatus(String status);
    @Query("select d "+
            "from Delivery d "+
            "where d.customerid=?1 and d.status=?2")

    List<Delivery> findBycustomerid(String customerid,String status);

}
