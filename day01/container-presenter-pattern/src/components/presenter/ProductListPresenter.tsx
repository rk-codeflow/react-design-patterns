import Error from "../common/Error";
import Loader from "../common/Loader";
import type { ProductPresenterProps } from "../../types/props/productPresenterProps";
import Cart from "./Cart";

const ProductListPresenter = ({
  products,
  items,
  loading,
  error,
  onAddToCart,
  onDecItemCount,
  onIncItemCount,
}: ProductPresenterProps) => {
  if (loading) return <Loader />;

  if (error) return <Error />;
  return (
    <div className="grid gap-y-6">
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[3fr_1fr] md:gap-x-10">
        {products.length === 0 ? (
          <p className="text-center text-bold text-xl sm:text-3xl">
            No products found
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 md:grid-cols-4 sm:gap-8">
            {products.map((product) => {
              const { id, title, price, description, images, category } =
                product;
              return (
                <div
                  className="flex flex-col space-y-4 sm:space-y-6 cursor-pointer bg-gray-100/50 border border-gray-400 rounded-md p-4"
                  key={id}
                >
                  <img
                    src={images[0]}
                    alt={title}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="rounded-xl w-full hover:scale-102
               transition-all duration-300 ease-in-out"
                  />
                  <div className="flex items-center justify-between">
                    <h4>{title}</h4>
                    <p>{category.name}</p>
                  </div>
                  <p className="text-sm line-clamp-4">{description}</p>
                  <div className="flex justify-between">
                    <h5>Price</h5>
                    <p>$ {price}</p>
                  </div>
                  <button
                    className="cursor-pointer border border-gray-400 px-2 py-1 rounded-md"
                    onClick={() => {
                      if (product && onAddToCart) {
                        onAddToCart(product);
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <Cart
          items={items}
          onDecItemCount={onDecItemCount}
          onIncItemCount={onIncItemCount}
        />
      </div>
    </div>
  );
};

export default ProductListPresenter;
