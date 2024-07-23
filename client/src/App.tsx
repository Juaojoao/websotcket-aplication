import { ChatCustom } from "./components/chat/chat";
import { HeaderCustom } from "./components/header/header";
import { AlertProvider } from "./context/alertContext";
import { Routers } from "./router/router";

export const App = () => {
  return (
    <AlertProvider>
      <HeaderCustom />
      <Routers />
      <ChatCustom />
    </AlertProvider>
  );
};
