import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/system";


export default function App({ Component, pageProps }) {
  return <NextUIProvider><main className="dark text-foreground bg-background"><Component {...pageProps} /></main></NextUIProvider>
}
