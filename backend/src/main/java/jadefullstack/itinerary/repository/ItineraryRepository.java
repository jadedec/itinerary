package jadefullstack.itinerary.repository;

import jadefullstack.itinerary.entity.Itinerary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItineraryRepository extends JpaRepository<Itinerary, Integer> {

    List<Itinerary> findItineraryByCreatedBy(String createdBy);

    List<Itinerary> findItineraryByDestination(String destination);

    @Query("from Itinerary g where g.country = :country")
    List<Itinerary> getItineraryByCountry(String country);

    @Modifying
    @Query("delete Itinerary g where g.createdBy = :createdBy")
    int deleteGreetingCreatedBy(String createdBy);

}
