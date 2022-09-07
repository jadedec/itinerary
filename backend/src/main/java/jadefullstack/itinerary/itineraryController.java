package jadefullstack.itinerary;

import jadefullstack.itinerary.entity.Itinerary;
import jadefullstack.itinerary.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@CrossOrigin
@RestController
public class itineraryController {

    @Autowired
    ItineraryService itineraryService;

    @GetMapping("/itineraries")
    public ResponseEntity<List<Itinerary>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(itineraryService.getAll());
    }

    @GetMapping("/itineraries/country/{country}")
    public ResponseEntity<List<Itinerary>> getItineraryByCountry(@PathVariable String country) {
        List<Itinerary> itineraries = itineraryService.getItinerariesByCountry(country);
        return ResponseEntity.status(HttpStatus.OK).body(itineraries);
    }

    @GetMapping("/itineraries/destination/{destination}")
    public ResponseEntity<List<Itinerary>> getItinerariesByDestination(@PathVariable String destination) {
        List<Itinerary> itineraries = itineraryService.getItinerariesByDestination(destination);
        return ResponseEntity.status(HttpStatus.OK).body(itineraries);
    }

    @GetMapping("/random-itinerary")
    public ResponseEntity<Itinerary> getRandom() {
        Itinerary randomItinerary = itineraryService.getRandom();
        return ResponseEntity.status(HttpStatus.OK).body(randomItinerary);
    }

    @PostMapping("/itinerary")
    public ResponseEntity<?> createItinerary(@RequestBody Itinerary itinerary) {
        try {
            Itinerary newItinerary = itineraryService.createItinerary(itinerary);
            return ResponseEntity.status(HttpStatus.OK).body(newItinerary);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/itinerary/{id}")
    public ResponseEntity<?> deleteItinerary(@PathVariable String id) {

        boolean isDeleted = itineraryService.deleteById(parseInt(id));

        if (isDeleted == false) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("couldn't find am itinerary to deal with");
        }
        return ResponseEntity.status(HttpStatus.OK).body("itinerary deleted successfully");
    }

}