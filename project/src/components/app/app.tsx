import Main from '../../pages/mian/main';

type AppProps = {
  placesFound: number
}

function App({ placesFound }: AppProps) {
  return <Main placesFound={placesFound} />;
}

export default App;
