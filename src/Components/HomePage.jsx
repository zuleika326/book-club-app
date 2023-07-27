import Navbar from './Navbar';
import Author from './Author';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(src/assets/images/abstract-blurred-empty-college-library-interior-space-blurry-classroom-with-bookshelves-by-defocused-effect-generative-ai_438099-11738.jpg)',
        }}
      >

        <div className="container mx-auto px-4 ">
        
          <Author />
         
        </div>
      </div>
    </>
  );
};

export default Homepage;