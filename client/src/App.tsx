import { ChatCustom } from "./components/chat/chat";
import { HeaderCustom } from "./components/header/header";
import { Routers } from "./router/router";

export const App = () => {
  return (
    <>
      <HeaderCustom />
      <Routers />
      <ChatCustom />
    </>
  );
};
