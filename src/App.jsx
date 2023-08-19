

import './index.css'
import "./components/Index"
import {
  Hero,
  HighLight,
  Sales,
  Stories,
  Footer,
  NavBar,
  Cart,
} from "./components/Index";
import { heroapi, popularsales, toprateslaes, highlight,sneaker,story,footerAPI} from "./data/data";
function App() {
 return (
   <>
       <NavBar />
       <Cart/>
     <main className="relative flex justify-center  flex-col gap-12">
       <Hero heroapi={heroapi} />
       <Sales endpoint={popularsales} isExist />
       <HighLight {...highlight} ifExists={true} />
       <Sales endpoint={toprateslaes} />
       <HighLight {...sneaker} />
       <Stories {...story} />
       <Footer {...footerAPI} />
     </main>
   </>
 );
}

export default App
