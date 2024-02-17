
function LandingPage() {
  return (
    <div className="landing-page h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-black">Welcome to Gallery App</h1>
      <img src="https://images.unsplash.com/photo-1707985664409-02b34cec5e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" alt="Cover" className="w-full h-full object-cover" />
    </div>
  );
}

export default LandingPage;
