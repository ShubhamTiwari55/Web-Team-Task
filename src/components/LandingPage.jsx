import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page relative h-screen">
      {/* Cover image */}
      <img src="https://images.unsplash.com/photo-1707653057279-b94dff636f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="Cover" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Gallery</h1>
        <div className="flex space-x-4">
          <Link to="/collage" className="btn">Collage Gallery</Link>
          <Link to="/staged-scrolling" className="btn">Staged Scrolling Gallery</Link>
          <Link to="/carousel" className="btn">Carousel Gallery</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
