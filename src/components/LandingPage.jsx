import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page relative h-screen">
      {/* Cover image */}
      <img src="https://images.unsplash.com/photo-1707653057279-b94dff636f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="Cover" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-serif font-bold mb-8 text-red-600">Welcome to the Gallery!</h1>
        <h1 className="text-2xl font-serif font-bold mb-8 text-green-500">Choose any of the style - </h1>
        <div className="flex space-x-12 text-xl">
          <Link to="/collage" className="btn  hover:text-yellow-300">Collage Gallery</Link>
          <Link to="/staged-scrolling" className="btn  hover:text-yellow-300">Staged Scrolling Gallery</Link>
          <Link to="/carousel" className="btn hover:text-yellow-300">Carousel Gallery</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
