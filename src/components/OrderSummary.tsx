import { CartItem } from "@/pages/RestaurantDetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CircleMinus, CirclePlus, Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void; // Update type of addToCart
  decreseMenuItemQuantity: (cartItem: CartItem) => void;
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({
  restaurant,
  cartItems,
  addToCart,
  decreseMenuItemQuantity,
  removeFromCart,
}: Props) => {
  const getTotalCost = () => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalPrice + restaurant.deliveryPrice;

    return totalWithDelivery;
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between ">
          <span>Your Orders</span>
          <span>₹ {getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between" key={item._id}>
            <span className="flex gap-3 items-center">
              <span className="flex gap-1">
                <CircleMinus
                  size={22}
                  className="text-gray-400 hover:text-black cursor-pointer"
                  onClick={() => decreseMenuItemQuantity(item)}
                />
                <Badge variant="outline">{item.quantity}</Badge>
                <CirclePlus
                  size={22}
                  className="text-gray-400 hover:text-black cursor-pointer"
                  onClick={() => addToCart(item)}
                />
              </span>
              <span>{item.name}</span>
            </span>

            <span className="flex items-center gap-3">
              ₹ {item.price * item.quantity}
              <span>
                <Trash
                  size={20}
                  onClick={() => removeFromCart(item)}
                  className="cursor-pointer"
                  color="red"
                />
              </span>
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between ">
          <span>Delivery</span>
          <span> ₹ {restaurant.deliveryPrice}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
