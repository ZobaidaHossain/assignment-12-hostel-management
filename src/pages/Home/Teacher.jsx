
import img1 from '../../assets/member1.png'
import img2 from '../../assets/member2.png'
import img3 from '../../assets/member3.png'
import img4 from '../../assets/member4.png'
const Teacher = () => {
    return (
        <div className="section ">
        <div className="container mx-auto py-10 ">
          <h2 className="text-3xl font-bold  mb-5 flex justify-center items-center">Our Hostel Facilities</h2>
         
          <div className="flex flex-wrap gap-[6.5rem]">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img1} alt="John Doe" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Main Supervisor</h3>
                <p>Name:Kudus khan</p>
                <p>Number:01912345678</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md-w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img2} alt="Jane Smith" className="reviewer-image w-full h-[200px]" />
                <h3 className="text-xl font-semibold"> Co-Supervisor</h3>
                <p>Name:mridha khan</p>
                <p>Number:01912345678</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="review-item">
                <img src={img3} alt="Robert Johnson" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Supervisor</h3>
                <p>Name:Opshory</p>
                <p>Number:01912345678</p>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 ">
              <div className="review-item">
                <img src={img4} alt="Emily Davis" className="reviewer-image  w-full h-[200px]" />
                <h3 className="text-xl font-semibold">Supervisor</h3>
                <p>Name:Mukul khan</p>
                <p>Number:01912345678</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Teacher;