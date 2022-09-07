package jadefullstack.itinerary;

import jadefullstack.itinerary.entity.Itinerary;
import jadefullstack.itinerary.service.ItineraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;

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


}