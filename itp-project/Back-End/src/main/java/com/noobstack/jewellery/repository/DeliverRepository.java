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
    @Query("select d "+
    "from Delivery d "+
    "where d.deliverBoy=?1 and d.status=?2 and d.deliveredTime=?3")
    List<Delivery> findBydeliveredTime(DeliverBoy deliverBoy,String status,String deliveredTime);
    @Query("select d "+
            "from Delivery d "+
            "where d.status=?1 and d.deliverBoy=?2")
    List<Delivery> findbyDeliveryBoyAndStatus(String status,DeliverBoy deliverBoy);
    @Query("select d "+
            "from Delivery d "+
            "where d.status=?1 or d.status=?2")
    List<Delivery>findbyDeliveryBoyTwoStatus(String status,String status2);
}
