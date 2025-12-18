import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import type { CartProps } from "../../types/cart/cartProps";
import type { CartItem } from "../../types/cart/cart";

const Cart = ({ items, onDecItemCount, onIncItemCount }: CartProps) => {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-xl border border-gray-400 p-4 h-fit flex flex-col space-y-4 rounded-md">
      {items.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <>
          <div className="flex justify-between">
            <h3>Price</h3>
            <p>$ {total}</p>
          </div>

          {items.map((item: CartItem) => {
            const { id, title, images, price, quantity } = item;
            return (
              <div className="flex items-center gap-x-6" key={id}>
                <img src={images[0]} alt={title} className="h-10 w-10" />

                <div className="grid">
                  <p>{title}</p>
                  <p>{price}</p>
                </div>

                <div className="flex items-center gap-x-4">
                  <button
                    className="cursor-pointer"
                    onClick={() => onDecItemCount(id)}
                  >
                    <FiMinusCircle />
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="cursor-pointer"
                    onClick={() => onIncItemCount(id)}
                  >
                    <FiPlusCircle />
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
