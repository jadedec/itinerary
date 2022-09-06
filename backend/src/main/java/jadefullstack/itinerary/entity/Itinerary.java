package jadefullstack.itinerary.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Itinerary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String createdBy;
    private String destination;
    private String country;
    @ElementCollection
    private List<String> route;
    private Timestamp dateCreated;

    public Itinerary() {
        this.dateCreated = new Timestamp(new Date().getTime());
    }

    public Itinerary(int id, String createdBy, String destination, String country, ArrayList<String> route) {
        this.id = id;
        this.createdBy = createdBy;
        this.destination = destination;
        this.country = country;
        this.route = route;
        this.dateCreated = new Timestamp(new Date().getTime());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<String> getRoute() {
        return route;
    }

    public void setRoute(List<String> route) {
        this.route = route;
    }

    @Override
    public String toString() {
        return "My Itinerary:"
                + " [ id :"+ id
                + "author :"+ createdBy
                + "destination :"+ destination+" of "+country
                + "route :"+ route
                +" ]";
    }
}
