import { wrapper } from "@/src/redux/store";
import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
// sdasdasdas
export default App;
