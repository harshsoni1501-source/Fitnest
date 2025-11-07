package com.studio.service;

import com.studio.dto.CartItemDTO;
import com.studio.model.CartItem;
import com.studio.model.Product;
import com.studio.model.User;
import com.studio.repository.CartItemRepository;
import com.studio.repository.ProductRepository;
import com.studio.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartService {
    
    private final CartItemRepository cartItemRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    
    public List<CartItemDTO> getCart(Long userId) {
        return cartItemRepository.findByUserId(userId).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    public CartItemDTO addToCart(Long userId, Long productId, Integer quantity) {
        User user = userRepository.findById(userId).orElse(null);
        Product product = productRepository.findById(productId).orElse(null);
        
        if (user != null && product != null) {
            CartItem cartItem = new CartItem();
            cartItem.setUser(user);
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            
            CartItem saved = cartItemRepository.save(cartItem);
            return convertToDTO(saved);
        }
        return null;
    }
    
    public void removeFromCart(Long userId, Long productId) {
        cartItemRepository.deleteByUserIdAndProductId(userId, productId);
    }
    
    public void clearCart(Long userId) {
        List<CartItem> items = cartItemRepository.findByUserId(userId);
        cartItemRepository.deleteAll(items);
    }
    
    private CartItemDTO convertToDTO(CartItem cartItem) {
        return new CartItemDTO(
            cartItem.getId(),
            cartItem.getProduct().getId(),
            cartItem.getProduct().getName(),
            cartItem.getProduct().getPrice(),
            cartItem.getQuantity()
        );
    }
}
