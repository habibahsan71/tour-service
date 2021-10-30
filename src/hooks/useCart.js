import { useEffect, useState } from "react";

const useCart = () => {
  const [selectedService, setSelectedService] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setSelectedService(cart);
  }, []);

  function getCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }

  function addToCart(service) {
    const isHave = selectedService.find(
      (selected) => selected._id === service._id
    );

    if (isHave) {
      alert("Package Added To the My Order(CART)");
    } else {
      const newSelection = [...selectedService, service];
      localStorage.setItem("cart", JSON.stringify(newSelection));
      setSelectedService(newSelection);
    }
  }

  function remove(_id) {
    const selectAfterRemove = selectedService.filter(
      (service) => service._id !== _id
    );
    localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
    setSelectedService(selectAfterRemove);
  }

  return { setSelectedService, remove, addToCart, selectedService };
};

export default useCart;
