// // import { Button } from "@mui/base";
// import style from "./index.module.css";

// import  { useRef, useEffect } from "react";

// const CrousalSlider = () => {
//   const slidesContainer = document.querySelector(".slides-container");
//   const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
//   const prevButton = document.querySelector(".prev");
//   const nextButton = document.querySelector(".next");

//   nextButton.addEventListener("click", () => {
//     slidesContainer.scrollLeft += slideWidth;
//   });

//   prevButton.addEventListener("click", () => {
//     slidesContainer.scrollLeft -= slideWidth;
//   });

//   const slidesContainerRef = useRef(null);
//   const slideWidthRef = useRef(0);
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

//   slidesContainerRef.current = document.querySelector(".slides-container");
//   slideWidthRef.current =
//     slidesContainerRef.current.querySelector(".slide").clientWidth;
//   prevButtonRef.current = document.querySelector(".prev");
//   nextButtonRef.current = document.querySelector(".next");

//   useEffect(() => {
//     const handleNextClick = () => {
//       slidesContainerRef.current.scrollLeft += slideWidthRef.current;
//     };

//     const handlePrevClick = () => {
//       slidesContainerRef.current.scrollLeft -= slideWidthRef.current;
//     };

//     nextButtonRef.current.addEventListener("click", handleNextClick);
//     prevButtonRef.current.addEventListener("click", handlePrevClick);

//     // Clean up the event listeners
//     return () => {
//       nextButtonRef.current.removeEventListener("click", handleNextClick);
//       prevButtonRef.current.removeEventListener("click", handlePrevClick);
//     };
//   }, []);

//   return (
//     <div
//       id="app"
//       className={`max-w-screen-lg mx-auto !mt-6 py-3 transition-all duration-500 ease-linear ${style.crousalCard}`}
//     >
//       <h3 className="font-cabinetGrotesk px-5  lg:text-2xl font-bold mb-3 leading-tight ">
//         Choose Template
//       </h3>
//       <div className="" style={{ borderTop: "1px solid #ddd" }}></div>
//       <div className="relative px-5">
//         <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               alt="template-4"
//               srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=1920&q=75 2x"
//               src="https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=1920&q=75"
//               width={736}
//               height={1042}
//               decoding="async"
//               data-nimg={1}
//               className="w-full h-full object-cover"
//               style={{ color: "transparent" }}
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               alt="template-5"
//               srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=1920&q=75 2x"
//               src="https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=1920&q=75"
//               width={736}
//               height={1042}
//               decoding="async"
//               data-nimg={1}
//               className="w-full h-full object-cover"
//               style={{ color: "transparent" }}
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               alt="template-1"
//               srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=1920&q=75 2x"
//               src="https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=1920&q=75"
//               width={736}
//               height={1042}
//               decoding="async"
//               data-nimg={1}
//               className="img-fluid"
//               style={{ color: "transparent" }}
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
// <img alt="template-2" srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=1920&q=75 2x" src="https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=1920&q=75" width={736} height={1042} decoding="async" data-nimg={1} className="img-fluid" style={{color: 'transparent'}} />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="mountain_image"
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="mountain_image"
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/1743367/pexels-photo-1743367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="mountain_image"
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/5920021/pexels-photo-5920021.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt="mountain_image"
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/12805075/pexels-photo-12805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="mountain_image"
//             />
//           </div>
//           <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="mountain_image"
//             />
//           </div>
//         </div>
//           <button className={style.Selectbtn}>Selecteed</button>

//         <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
//           <button
//             role="button"
//             className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
//             aria-label="prev"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
//           <button
//             role="button"
//             className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
//             aria-label="next"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrousalSlider;

// import { Button } from "@mui/base";
import { useRef, useEffect } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import style from "./index.module.css";

const CrousalSlider = (prop) => {
  const slidesContainerRef = useRef(null);
  // const slideWidthRef = useRef(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handleNextClick = () => {
      slidesContainer.scrollLeft += slideWidth;
    };

    const handlePrevClick = () => {
      slidesContainer.scrollLeft -= slideWidth;
    };

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    // Clean up the event listeners
    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className={style.crousalSlider}>
      <h3 className={style.title}>Choose Template</h3>
      <div className={style.divider}></div>
      <div className="relative px-5">
        <div
          className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
          ref={slidesContainerRef}
        >
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <h4 className={style.h4}>Moonstone</h4>
            <img
              alt="template-4"
              srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=1920&q=75 2x"
              src="https://www.letsmakeinvoice.com///_next/static/media/template-4.e4d878fc.png?w=1920&q=75"
              width={736}
              height={1042}
              decoding="async"
              data-nimg={1}
              className="img-fluid"
              style={{ color: "transparent" }}
            />
        
            <button
              className={style.Selectbtn}
              value="Selected"
              onClick={() => prop.selected("Moonstone")}
            >
              Selected
            </button>
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <h4 className={style.h4}>Tigereye</h4>
            <img
              alt="template-5"
              srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=1920&q=75 2x"
              src="https://www.letsmakeinvoice.com///_next/static/media/template-5.35f67efe.png?w=1920&q=75"
              width={736}
              height={1042}
              decoding="async"
              data-nimg={1}
              className="img-fluid"
              style={{ color: "transparent" }}
            />
          
            <button
              className={style.Selectbtn}
              value="Selected"
              onClick={() => prop.selected("Tigereye")}
            >
              Selected
            </button>
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <h4  className={style.h4}>Mirage</h4>
            <img
              alt="template-1"
              srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=1920&q=75 2x"
              src="https://www.letsmakeinvoice.com///_next/static/media/template-1.0755dd26.png?w=1920&q=75"
              width={736}
              height={1042}
              decoding="async"
              data-nimg={1}
              className="img-fluid"
              style={{ color: "transparent" }}
            />
           
            <button
              className={style.Selectbtn}
              value="Selected"
              onClick={() => prop.selected("Mirage")}
            >
              Selected
            </button>
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <h4>crocus</h4>
            <img
              alt="template-2"
              srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=750&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=1920&q=75 2x"
              src="https://www.letsmakeinvoice.com///_next/static/media/template-2.2f14d0aa.png?w=1920&q=75"
              width={736}
              height={1042}
              decoding="async"
              data-nimg={1}
              className="img-fluid"
              style={{ color: "transparent" }}
            />
           
            <button
              className={style.Selectbtn}
              value="Selected"
              onClick={() => prop.selected("crocus")}
            >
              Selected
            </button>
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
          <h4 className={style.h4}>Rosedust</h4> 
            <img
              alt="template-3"
              srcSet="https://www.letsmakeinvoice.com///_next/static/media/template-3.5907e1be.png?w=384&q=75 1x, https://www.letsmakeinvoice.com///_next/static/media/template-3.5907e1be.png?w=640&q=75 2x"
              src="https://www.letsmakeinvoice.com///_next/static/media/template-3.5907e1be.png?w=640&q=75"
              width={300}
              height={280}
              decoding="async"
              data-nimg={1}
              className="img-fluid"
              style={{ color: "transparent" }}
            />
            
            <button
              className={style.Selectbtn}
              value="Selected"
              onClick={() => prop.selected("Rosedust")}
            >
              Selected
            </button>
          </div>
        </div>

        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button
            role="button"
            className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev"
            ref={prevButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button
            role="button"
            className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="next"
            ref={nextButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrousalSlider;
