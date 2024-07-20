import "./index.css";
import { AvatarIcon } from "../../assets/avatar";
import { CartIcon } from "../../assets/cartIcon";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../features/authSlice";
import { useClickAway } from "react-use";

export const HeaderCustom = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [menuMob, setMenuMob] = useState(false);

  const { loged } = useSelector((state: RootState) => state.auth);

  const handleClickMenu = () => setMenuMob(!menuMob);

  const dropDownRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  useClickAway(dropDownRef, () => {
    setOpenDropDown(false);
  });

  return (
    <header className="flex justify-around p-5 bg-blue-600 items-center shadow-lg relative">
      <div className="logo text-white">LOGO</div>
      <nav className="hidden sm:flex nav-desktop">
        <ul className="gap-5 items-center flex">
          <li>
            <CartIcon fillIcon="#fff" />
          </li>
          <li className="show-drop" onClick={handleOpenDropDown}>
            <AvatarIcon />
            <ul
              ref={dropDownRef}
              className={`dropdown ${
                openDropDown ? "active" : ""
              } text-base bg-blue-50 drop-shadow-md mt-4 justify-center items-center flex flex-col gap-2`}
            >
              {loged ? (
                <>
                  <li>
                    <a href="#" onClick={logoutUser}>
                      Sair
                    </a>
                  </li>
                  <li>
                    <a href="/perfil">Perfil</a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/login">Entrar</a>
                  </li>
                  <li>
                    <a href="/register">Registrar</a>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="flex sm:hidden  absolute right-0 top-0 py-5 px-5 z-20 drop-shadow-lg overflow-hidden">
        <button className="relative group" onClick={handleClickMenu}>
          <div className="relative flex items-center justify-center  transform transition-all ring-0 duration-200">
            <div
              className={`flex flex-col justify-between drop-shadow-md w-[20px] h-[20px] transform transition-all duration-300 ${
                menuMob ? "-rotate-[45deg]" : "rotate-0"
              } origin-center`}
            >
              <div
                className={`bg-orange-500 h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                  menuMob ? "-rotate-90 h-[1px] -translate-y-[1px]" : "rotate-0"
                } origin-right delay-75`}
              ></div>
              <div className="bg-orange-500 h-[2px] rounded"></div>
              <div
                className={`bg-orange-500 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                  menuMob ? "-rotate-90 h-[1px] translate-y-[1px]" : "rotate-0"
                } origin-left delay-75`}
              ></div>
            </div>
          </div>
        </button>
      </div>
      <nav
        className={`nav-mob flex flex-col drop-shadow-md bg-white gap-10 w-2/3 h-lvh fixed right-0 top-0 z-10 transform transition-transform duration-300 justify-center items-center ${
          menuMob ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-6"></ul>
      </nav>
    </header>
  );
};
