import { ChatCustom } from "./components/chat/chat";
import { HeaderCustom } from "./components/header/header";
import { HeroCustom } from "./components/hero/hero";
import { HomePage } from "./pages/home";

export const App = () => {
  return (
    <>
      <HeaderCustom />
      <HeroCustom />
      <HomePage />
      <ChatCustom />
    </>
  );
};
