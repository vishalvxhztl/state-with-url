import { IProduct } from "../App";
import { getColorRGBA } from "../helpers/Color";

// Types Definations
type FilterResultsProps = {
  products: IProduct[];
};

function FilterResult({ products }: FilterResultsProps) {
  return (
    <div className="flex flex-wrap -mx-4 justify-evenly gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border rounded-xl flex flex-col justify-between"
          style={{
            background: `linear-gradient(145deg, ${getColorRGBA(
              product.colors[0]
            )} 0%, ${getColorRGBA(
              product.colors[product?.colors?.length - 1]
            )} 100%)`,
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
          }}
        >
          <div className={`mb-2 border-b border-gray-400 p-2 `}>
            <h4 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h4>
          </div>
          <div>
            <p className="text-[10px] text-gray-600 pb-0.5  border-b w-fit ">
              Available Color
            </p>
            <span className="flex gap-2 my-2">
              {product.colors.map((color: string, index) => (
                <span
                  key={"color-" + index}
                  className="h-7 w-7 block border-[1.5px] border-gray-500 rounded-full"
                  style={{ backgroundColor: color || "black" }}
                ></span>
              ))}
            </span>
          </div>
          <div>
            <p className="text-[10px] text-gray-600 pb-0.5 mb-2 border-b w-fit ">
              Available Sizes
            </p>
            <span className="flex gap-2">
              {product.sizes.map((size, index) => (
                <span
                  key={"size-" + index}
                  className="border w-10 border-gray-400 rounded-md text-center"
                >
                  {size.toUpperCase()}
                </span>
              ))}
            </span>
          </div>
          <div className="flex justify-between mt-3">
            <button
              type="button"
              className="text-blue-600 border border-blue-600 hover:bg-blue-700 transition-colors  hover:text-white rounded-full text-sm p-2.5 text-center inline-flex items-center "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            >
              <svg
                className="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterResult;
