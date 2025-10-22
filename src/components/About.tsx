import React from 'react'; // Added React import for clarity
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const About = () => {
  return (
    <>
      {/*
        SECTION 1: PAGE HEADER
        - Removed 'bg-red' (invalid class)
        - Simplified 'flex justify-center' on the <h1> to 'text-center'
      */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
        <div className="flex bg-sky-950 justify-center py-12">
          <h1 className="text-stone-500 text-[40px] font-bold text-center">
            ABOUT THE SUN
          </h1>
        </div>

        <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
      
      <div>
        <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" />
      </div>
      

      </section>

        {/*
          SECTION 2: ABOUT / MISSION
          - Added 'container mx-auto px-4' for padding and centering.
          - Added 'py-20' for vertical spacing.
          - Changed <h1> to <h2> and <h2> to <h3> for correct HTML semantics.
          - Fixed 'width-[50%]' to 'md:w-1/2' (it will be 50% width on medium screens and up).
          - Made the parent 'flex' stack vertically on mobile ('flex-col') and go horizontal on medium screens ('md:flex-row').
          - Added 'gap-8' for spacing between columns.
        */}
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus libero, pariatur repellat placeat tempora cumque
              fugiat est illum reprehenderit modi magni ratione nihil sed facere
              fugit. Non ea cumque provident!
            </p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              debitis nobis, maxime praesentium quos rerum autem odit dolorem,
              non deserunt animi quae earum, laboriosam nihil beatae in amet
              totam aspernatur.
            </p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              blanditiis odio ex, sapiente iste minus corporis id voluptates
              totam asperiores incidunt ab ducimus officia at ullam quas cum
              iusto. Magnam.
            </p>
          </div>
        </div>
      </section>

      

      {/*
        SECTION 3: OUR STORY
        - Added 'container mx-auto px-4 py-20' for layout.
        - Fixed typo 'PUR STORY' to 'OUR STORY'.
        - Changed <h1> to <h2>.
        - Simplified centering to 'text-center'.
        - Added 'mb-8' (margin-bottom) to the <h2>.
        - Added 'space-y-4' to the paragraphs for spacing.
        - Fixed image path: 'public\...' to '/...'.
        - Added 'mx-auto' and 'mt-8' to the image.
      */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-8">OUR STORY</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem pariatur quibusdam nam doloribus quod optio
              distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima
              doloremque, soluta et voluptatibus fuga!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem pariatur quibusdam nam doloribus quod optio
              distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima
              doloremque, soluta et voluptatibus fuga!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem pariatur quibusdam nam doloribus quod optio
              distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima
              doloremque, soluta et voluptatibus fuga!
            </p>
          </div>
          <img
            src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
            alt="Our story"
            className="w-auto max-w-lg mx-auto mt-8 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/*
        SECTION 4: SERVICES
        - Fixed comment typo 'dor' to 'for'.
        - Renamed <h1> 'MEET THE TEAM' to 'OUR SERVICES'.
        - Changed <h1> to <h2> and <h3>.
        - Added layout container and text styling.
        - Fixed all image paths.
        - Removed 'grid-rows-3' to let the grid flow naturally.
      */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">OUR SERVICES</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quam aperiam explicabo voluptate nisi officiis qui, ea, doloribus
              cumque quod.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Service 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  SERVICE 1
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, totam perferendis. Sed, quidem. Totam quaerat
                  laudantium cum.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Service 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  SERVICE 2
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, totam perferendis. Sed, quidem. Totam quaerat
                  laudantium cum.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Service 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  SERVICE 3
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, totam perferendis. Sed, quidem. Totam quaerat
                  laudantium cum.
                </p>
              </div>
            </div>
            {/* Add more services... */}
          </div>
        </div>
      </section>

      {/*
        SECTION 5: MEET THE TEAM
        - Changed <h1> to <h2> and <h3>.
        - Fixed all image paths.
        - Added 'gap-x-4' to the social icon links for spacing.
        - Centered text and content.
      */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEET THE TEAM</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quam aperiam explicabo voluptate nisi officiis qui, ea, doloribus
              cumque quod.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Felix Sisk"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold">Felix Sisk</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                totam perferendis.
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-500">
                <a href="#" className="hover:text-sky-700">
                  <BsLinkedin />
                </a>
                <a href="#" className="hover:text-pink-600">
                  <BsInstagram />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Team Member"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                totam perferendis.
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-500">
                <a href="#" className="hover:text-sky-700">
                  <BsLinkedin />
                </a>
                <a href="#" className="hover:text-pink-600">
                  <BsInstagram />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/floriane-vita-FyD3OWBuXnY-unsplash.jpg"
                alt="Team Member"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                totam perferendis.
              </p>
              <div className="flex justify-center gap-x-4 mt-4 text-xl text-gray-500">
                <a href="#" className="hover:text-sky-700">
                  <BsLinkedin />
                </a>
                <a href="#" className="hover:text-pink-600">
                  <BsInstagram />
                </a>
              </div>
            </div>
            {/* Add more team members... */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;








// import { BsLinkedin } from 'react-icons/bs';
// import { BsInstagram } from 'react-icons/bs';
// const About = () => {
//     return (
//         <>
    
//         <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
//             <div className="flex bg-sky-950 justify-center">
//             <h1 className="flex bg-red text-stone-500 text-[40px]">
//                 ABOUT THE SUN
//             </h1>
//             </div>

//             <div className="flex
//              bg-gradient-to-b from-orange-50 via-white to-white/90 p-10">

//             <div className="">
//                 <h1>ABOUT US</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero, pariatur repellat placeat tempora cumque fugiat est illum reprehenderit modi magni ratione nihil sed facere fugit. Non ea cumque provident!</p>
//             </div>

//             <div className="width-[50%]">
//                 <h2>for an extensive image</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis nobis, maxime praesentium quos rerum autem odit dolorem, non deserunt animi quae earum, laboriosam nihil beatae in amet totam aspernatur.</p>
//             </div>

//             <div>
//                 <h2>FOR THE MISSION</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia blanditiis odio ex, sapiente iste minus corporis id voluptates totam asperiores incidunt ab ducimus officia at ullam quas cum iusto. Magnam.</p>
//             </div>

//             </div>

//         </section>


//         <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
//             <div >
//                 <h1 className=" flex justify-center">PUR STORY</h1>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem pariatur quibusdam nam doloribus quod optio distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima doloremque, soluta et voluptatibus fuga!</p>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem pariatur quibusdam nam doloribus quod optio distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima doloremque, soluta et voluptatibus fuga!</p>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem pariatur quibusdam nam doloribus quod optio distinctio consequuntur ut. Nisi quo deserunt eaque quisquam minima doloremque, soluta et voluptatibus fuga!</p>

//                 <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//             </div>
//         </section>

// {/* a section dor the services offered */}
//         <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
//         <div>
//                 <h1 className='flex justify-center'>MEET THE TEAM</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam aperiam explicabo voluptate nisi officiis qui, ea, doloribus cumque quod laudantium expedita dolorum, quaerat consequatur amet reprehenderit? Quo, nesciunt expedita?</p>
//             </div>
//             <div className="grid grid-cols-3 grid-rows-3 gap-4">
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
//                 <div>
//                     <h1 className="flex justify-center">SERVICE1</h1>
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis, ut possimus dignissimos eaque magni corrupti aut impedit cupiditate voluptatibus!</p>
                    
//                 </div>
                
//             </div>
//         </section>

//         {/* A SECTION FOR THE team*/}
//         <section className="bg-gradient-to-b from-orange-50 via-white to-white/90">
//             <div>
//                 <h1 className='flex justify-center'>MEET THE TEAM</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam aperiam explicabo voluptate nisi officiis qui, ea, doloribus cumque quod laudantium expedita dolorum, quaerat consequatur amet reprehenderit? Quo, nesciunt expedita?</p>
//             </div>
//             <div className="grid grid-cols-3 grid-rows-3 gap-4">
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, </p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis,</p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis,</p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis,</p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, fuga recusandae quis,</p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
//                 <div>
                    
//                     <img src="public\floriane-vita-FyD3OWBuXnY-unsplash.jpg" alt="" className="w-auto"/>
//                     <h1 className="flex justify-center">felix sisk</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, totam perferendis. Sed, quidem. Totam quaerat laudantium cum, </p>
//                     <div className='flex justify-center'>
//                         <a href=""><BsLinkedin /></a>
//                         <a href=""><BsInstagram /></a>
                    

//                     </div>
                    
//                 </div>
                
//             </div>
//         </section>

//         </>
        
//     )
// }

// export default About;
