import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  addItemToCart,
  deleteItemFromCart,
} from "../../store/cart/cart.reducer";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItem));

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{`₹${price}`}</Price>
      <RemoveButton onClick={deleteItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
