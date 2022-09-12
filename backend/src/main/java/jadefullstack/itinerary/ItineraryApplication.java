package jadefullstack.itinerary;

import jadefullstack.itinerary.entity.Itinerary;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ItineraryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ItineraryApplication.class, args);
//        Itinerary barcelona = new Itinerary( 1, "Bob", "Barcelona", "Spain", new ArrayList<>(List.of("a Pedrera",
//				"Casa Milà",
//				"Casa Batlló",
//				"Casa Atmetller",
//				"Plaza Catalunya",
//				"La Rambla",
//				"Font de Canaletas")));
//
//		Itinerary england = new Itinerary( 2, "Adam", "London", "England", new ArrayList<>(List.of("The Tower of London & Tower Bridge",
//				"The South Bank and London Eye or Shard",
//				"The Houses of Parliament and Westminster Abbey",
//				"Buckingham Palace",
//				"Trafalgar Square",
//				"Covent Garden")));
//
//		Itinerary paris = new Itinerary( 3, "Jade", "Paris", "France", new ArrayList<>(List.of("Eiffel Tower",
//				"the Seine",
//				"The Houses of Parliament and Westminster Abbey",
//				"the Louvre Museum",
//				"the Luxembourg Gardens",
//				"Sainte-Chapelle")));
    }

}

