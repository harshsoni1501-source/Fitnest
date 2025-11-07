package com.studio.service;

import com.studio.dto.ProductDTO;
import com.studio.model.Product;
import com.studio.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ProductRepository productRepository;
    
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    public ProductDTO getProductById(Long id) {
        return productRepository.findById(id)
            .map(this::convertToDTO)
            .orElse(null);
    }
    
    public List<ProductDTO> getProductsByCategory(String category) {
        return productRepository.findByCategory(category).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    public List<ProductDTO> searchProducts(String query) {
        return productRepository.findByNameContainingIgnoreCase(query).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        Product saved = productRepository.save(product);
        return convertToDTO(saved);
    }
    
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id).orElse(null);
        if (product != null) {
            product.setName(productDTO.getName());
            product.setPrice(productDTO.getPrice());
            product.setDescription(productDTO.getDescription());
            product.setCategory(productDTO.getCategory());
            product.setInStock(productDTO.getInStock());
            Product updated = productRepository.save(product);
            return convertToDTO(updated);
        }
        return null;
    }
    
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
    
    private ProductDTO convertToDTO(Product product) {
        return new ProductDTO(
            product.getId(),
            product.getName(),
            product.getPrice(),
            product.getOriginalPrice(),
            product.getCategory(),
            product.getDescription(),
            product.getImage(),
            product.getFeatures(),
            product.getInStock(),
            product.getRating(),
            product.getReviews(),
            product.getTags()
        );
    }
    
    private Product convertToEntity(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setOriginalPrice(dto.getOriginalPrice());
        product.setCategory(dto.getCategory());
        product.setDescription(dto.getDescription());
        product.setImage(dto.getImage());
        product.setFeatures(dto.getFeatures());
        product.setInStock(dto.getInStock());
        product.setRating(dto.getRating());
        product.setReviews(dto.getReviews());
        product.setTags(dto.getTags());
        return product;
    }
}
