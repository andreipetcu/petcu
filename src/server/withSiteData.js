import axios from 'axios';

export const withSiteData = ({ revalidate = 'system' } = {}) => {
  return (wrappedDataFetcher) => {
    return async (context) => {
      // the props the lower order function gives us are here:
      let pageData = {};

      if (typeof wrappedDataFetcher === 'function') {
        // make sure you pass context through
        pageData = (await wrappedDataFetcher(context)) || {};
      }

      const { data } = await axios.get(
        'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1',
      );

      const returnValue = {
        props: {
          initialReduxState: {
            ui: { counter: data[0] },
          },
        },
      };

      if (revalidate === 'system') {
        // returnValue.revalidate = Number(process.env.NEXT_PUBLIC_ISR_DELAY);
        returnValue.revalidate = 10;
      } else if (typeof revalidate === 'number') {
        returnValue.revalidate = revalidate;
      }
      // else just don't add revalidate, you may come in from getServerSideProps

      // merge objects freely, this is the server, most of these run once or rarely
      returnValue.props = {
        ...returnValue.props,
        ...pageData.props,
      };

      return returnValue;
    };
  };
};
