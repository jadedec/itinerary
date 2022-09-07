package jadefullstack.itinerary.service;

import jadefullstack.itinerary.entity.Itinerary;
import jadefullstack.itinerary.repository.ItineraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class ItineraryService {

    @Autowired
    ItineraryRepository itineraryRepository;

    // get all the greetings ids (int)
    public List<Integer> extractIds() {
        List<Itinerary> greetings = itineraryRepository.findAll();
        return greetings.stream().map(itinerary -> itinerary.getId()).collect(Collectors.toList());
    }

    public List<Itinerary> getAll() {
        List<Itinerary> itineraries = itineraryRepository.findAll();
        return itineraries;
    }

    public Itinerary getById(int id) {
        Itinerary itinerary = itineraryRepository.findById(id).orElse(null);
        return itinerary;
    }

    public Itinerary getRandom() {
        List<Itinerary> itineraries = itineraryRepository.findAll();
        Random random = new Random();
        int randomIndex = random.nextInt(itineraries.size());
        Itinerary randomItinerary = itineraries.get(randomIndex);
        return randomItinerary;
    }

    public boolean deleteById(int id) {
        Itinerary itineraryToDelete = itineraryRepository.findById(id).orElse(null);
        if (itineraryToDelete == null) {
            return false;
        }
        itineraryRepository.delete(itineraryToDelete);
        return true;
    }

    public Itinerary createItinerary(Itinerary itinerary) {
        if (itinerary.getDestination() == null || itinerary.getDestination().length() < 1) {
            throw new RuntimeException("Itinerary must have a destination");
        }

        if (itinerary.getCountry() == null || itinerary.getCountry().length() < 1) {
            throw new RuntimeException("Itinerary must have a country");
        }

        if (itinerary.getCreatedBy() == null || itinerary.getCreatedBy().length() < 1) {
            throw new RuntimeException("Itinerary must have an author name");
        }

        return itineraryRepository.save(itinerary);
    }


    public List<Itinerary> getItinerariesCreatedBy(String createdBy) {
        return itineraryRepository.findAll().stream()
                .filter(itinerary -> itinerary.getCreatedBy().equalsIgnoreCase(createdBy))
                .collect(Collectors.toList());
    }


    public List<Itinerary> getItinerariesByCountry(String country) {
        List<Itinerary> itineraries = itineraryRepository.getItineraryByCountry(country);
        return itineraries;
    }

    public List<Itinerary> getItinerariesByDestination(String destination) {
        List<Itinerary> itineraries = itineraryRepository.getItineraryByCountry(destination);
        return itineraries;
    }

    public int deleteItineraryByCreatedBy(String createdBy) {
        int deleteCount = itineraryRepository.deleteItineraryCreatedBy(createdBy);
        return deleteCount;
    }

}
