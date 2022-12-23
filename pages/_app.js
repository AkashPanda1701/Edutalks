import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from "next-auth/react";
import Bots from "../components/ChatBot";


let socket;
export default function App({ Component, pageProps }) {

  


  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} height={3} showOnShallow={true} />
      <Bots />
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
