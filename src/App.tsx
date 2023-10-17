//React Imports
import { useEffect, useState } from "react";
//Depenency Imports
import { useLocation, useNavigate } from "react-router-dom";
import FilterResult from "./components/FilterResult";
import SelectDropdown from "./components/SelectDropdown";

/**
 *--- Types & Interfaces Definations
 **/
export interface IProduct {
  name: string;
  colors: string[];
  sizes: string[];
}

type FilterProduct = {
  [key: string]: string;
};

/**
 * --- Global Variables
 **/
const products: IProduct[] = [
  {
    name: "Iphone 15 📱",
    colors: ["lightYellow", "lightblue", "lightgreen"],
    sizes: ["max", "pro"],
  },
  {
    name: "Samsuung (Karcha Seth 🤓 Edition)📱",
    colors: ["darkSlateGray", "lightblue", "lightgreen"],
    sizes: ["s20", "pro"],
  },
  {
    name: "Indian Cricket T-shirt 🇮🇳",
    colors: ["blue", "dodgerblue"],
    sizes: ["sm", "md", "l", "xl"],
  },
  {
    name: "IPL CSK 👑 T-shirt ",
    colors: ["yellow"],
    sizes: ["sm", "md", "l", "xl"],
  },
  {
    name: "Spiderman Suit 🕷️ (also get free:-  Great Responsibility)",
    colors: ["red", "black"],
    sizes: ["l", "xl"],
  },
  {
    name: "Harry Potter's ⚡️ Wand 🪄",
    colors: ["brown", "black"],
    sizes: ["md","l"],
  },
  {
    name: "RCB T-shirt",
    colors: ["red", "green"],
    sizes: ["sm", "md", "l", "xl"],
  },
  {
    name: "Filler Product 1",
    colors: ["red","blue","yellow","green","lightslategray", "dodgerblue"],
    sizes: ["sm", "md", "l", "xl"],
  },
  {
    name: "Filler Product 2",
    colors: ["red","blue","yellow","green","lemonChiffon", "dodgerblue", "salmon"],
    sizes: ["sm", "md", "l", "xl"],
  },
];
// size Option
const sizesOption = [
  {
    title: "Select Size",
    value: "",
  },
  {
    title: "Ultra Pro Max ...",
    value: "pro",
  },
  {
    title: "small",
    value: "sm",
  },
  {
    title: "medium",
    value: "md",
  },
  {
    title: "large",
    value: "l",
  },
  {
    title: "extra large",
    value: "xl",
  },
];
//color options
const colorOptions = [
  {
    title: "Select Color",
    value: "",
  },
  {
    title: "Red 🔴",
    value: "red",
  },
  {
    title: "Green 🟢",
    value: "green",
  },
  {
    title: "Blue 🔵",
    value: "blue",
  },
  {
    title: "Yellow 🌝",
    value: "yellow",
  },
];

function App() {
  /**
   * Hooks Declaring
   */
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  /**
   * State Defination
   */
  const defaultFilter: FilterProduct = { name: "", color: "", size: "" };

  const initialFilter: FilterProduct = {
    name: queryParams.get("name") || defaultFilter.name,
    color: queryParams.get("color") || defaultFilter.color,
    size: queryParams.get("size") || defaultFilter.size,
  };

  const [filter, setFilter] = useState<FilterProduct>(initialFilter);

  /**
   * Event Handlers
   */
  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value.toLowerCase() });
  };

  //Filter out
  const filteredProducts = products.filter((product) => {
    const nameMatch =
      !filter.name ||
      product.name.toLowerCase().includes(filter.name.toLowerCase());

    const colorMatch =
      !filter.color || product.colors.includes(filter.color.toLowerCase());

    const sizeMatch =
      !filter.size || product.sizes.includes(filter.size.toLowerCase());

    return nameMatch && colorMatch && sizeMatch;
  });

  /**
   * Life Cycle
   */

  useEffect(() => {
    const searchParams = new URLSearchParams();

    for (const key in filter) {
      if (filter[key] !== defaultFilter[key]) {
        searchParams.set(key, filter[key]);
      }
    }

    // Use the navigate function to update the URL
    navigate({ search: `?${searchParams.toString()}` });
  }, [filter.color, filter.name, filter.size]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-16 flex justify-center">
        Free Products 🛒
      </h1>
      {/* = = = = = = Input Section = = = = = = */}
      <div className="flex space-x-4 mb-4 border-b pb-5 justify-evenly">
        <input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
          placeholder="Filter by name"
          className="border rounded p-2 w-1/4"
        />
        <SelectDropdown
          selectName="color"
          selectValue={filter.color}
          selectOptions={handleFilterChange}
          optionsList={colorOptions}
        />
        <SelectDropdown
          selectName="size"
          selectValue={filter.size}
          selectOptions={handleFilterChange}
          optionsList={sizesOption}
        />
      </div>
      {/* = = = = = = = Filter Result Products Listing = = = = = = = */}
      <FilterResult products={filteredProducts} />
    </div>
  );
}

export default App;
