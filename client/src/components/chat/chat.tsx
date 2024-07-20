import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import "./style.css";
import { InputCustom } from "../inputs/input";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const ChatCustom = () => {
  const [open, setOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickAway(chatRef, (e: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  });

  const openChat = () => {
    setOpen(!open);
  };

  const { loged, user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <button
        type="button"
        className="button-chat w-12 h-12 rounded-full bg-orange-500 fixed bottom-0 right-0 m-4"
        onClick={openChat}
        ref={buttonRef}
      ></button>
      <div
        ref={chatRef}
        className={`content-chat w-0 h-0 bottom-0 right-0 overflow-hidden transition-all duration-500 rounded-t-lg bg-white rounded-bl-lg drop-shadow-md fixed m-16 border-orange-600 border-0 ${
          open ? "active" : ""
        }`}
      >
        {loged ? (
          <>
            <div className="header-chat p-2 bg-orange-600 flex justify-between items-center">
              <span>{user?.username}</span>
              <button
                type="button"
                className="close-chat rounded-full w-6 h-6 bg-orange-500"
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>
            <div className="content-chat"></div>
            <div className="input-chat p-2">
              <InputCustom placeholder="Digite sua mensagem" />
            </div>
          </>
        ) : (
          <h1>Login</h1>
        )}
      </div>
    </>
  );
};
