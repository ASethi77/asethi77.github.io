import './tailwind.css';
import { renderToStaticMarkup } from "react-dom/server";
import WavesBg from './WavesBackground';

function App() {

  const svgString = encodeURIComponent(renderToStaticMarkup(<WavesBg />));
  
  return (
    <div id="LandingPage">
      <div className="hero min-h-[80vh] border-opacity-100" style={{
            backgroundImage: `url('data:image/svg+xml;utf8, ${svgString}')`
        }}>
        <div className="hero-content text-center bg-accent">
          <div className="max-w-max-content">
            <h1 className="text-8xl font-bold animate-fadeIn text-accent-content">full of empty space</h1>
            <h2 className="text-3xl py-9 animate-fadeIn text-accent-content">stories of a nerd screaming into the void</h2>
          </div>
        </div>
      </div>

      <h1 className="border-t-2 border-secondary text-5xl text-center py-9">Projects</h1>
      <div id="Projects" className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div className="divider">OR</div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>


      {/* <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
