import { useContext, useState } from "react";
import Moon from "../src/assets/icons/moon.svg";
import Sun from "../src/assets/icons/sun.svg";
import LWSLogo from "../src/assets/logo.svg";
import Ring from "../src/assets/ring.svg";
import ShoppingCart from "../src/assets/shopping-cart.svg";
import CartModal from "./cine/CartDetailsModal";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={LWSLogo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 cursor-pointer dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleCartShow}
            >
              <img
                className="cursor-pointer"
                src={ShoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[18px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
