import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import { SessionProvider } from "next-auth/react";



export default function App({ Component, pageProps : { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
    
      <Component {...pageProps} />
    
    </SessionProvider>
    )
}

