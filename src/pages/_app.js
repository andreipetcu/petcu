import { Provider as ReduxProvider } from 'react-redux';
import { useStore } from '../store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    // <IntlProvider
    //   locale={router.locale}
    //   defaultLocale={router.defaultLocale}
    //   messages={messages}
    // >
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
    // </IntlProvider>
  );
};

export default MyApp;
