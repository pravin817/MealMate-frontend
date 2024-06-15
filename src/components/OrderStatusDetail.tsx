import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};
const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5 ">
      <div className="flex flex-col">
        <span className="font-bold">Deliverying to : </span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLineOne}, {order.deliveryDetails.city}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">Your Orders</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.quantity} x {item.name}
            </li>
          ))}
        </ul>
      </div>

      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>Rs : {order.totalAmount}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
