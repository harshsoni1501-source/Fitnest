package com.studio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String name;
    private Double price;
    private Double originalPrice;
    private String category;
    private String description;
    private String image;
    private List<String> features;
    private Boolean inStock;
    private Double rating;
    private Integer reviews;
    private List<String> tags;
}
