import ReactGa from 'react-ga';

export default function logPageView() {
  if (window) {
    ReactGa.set({
      page: window.location.pathname
    });
    ReactGa.pageview(window.location.pathname);
  }
}
