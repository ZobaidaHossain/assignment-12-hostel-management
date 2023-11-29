import img1 from '../../assets/ac.jpg'
import img2 from '../../assets/di.jpg'
import img3 from '../../assets/re.jpg'
import img4 from '../../assets/se.jpg'

const Facility = () => {
    return (
        <div className="section ">
        <div className="container mx-auto py-10 ">
          <h2 className="text-3xl font-bold  mb-5 flex justify-center items-center">Our Hostel Facilities</h2>
         
          <div className="flex flex-wrap gap-[6.5rem]">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img1} alt="John Doe" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Accommodation</h3>
                <p>Explore our well-furnished rooms designed for a cozy and peaceful stay.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img2} alt="Jane Smith" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold"> Dining Facilities</h3>
                <p>Enjoy a variety of delicious and nutritious meals prepared in our modern kitchen facilities.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img3} alt="Robert Johnson" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold"> Recreation Areas</h3>
                <p>Unwind in our recreational areas, featuring lounges, game rooms, and outdoor spaces for leisure and socializing.</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 ">
              <div className="review-item">
                <img src={img4} alt="Emily Davis" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Security Measures</h3>
                <p>our security is our priority. Benefit from our 24/7 security personnel and advanced surveillance systems.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Facility;