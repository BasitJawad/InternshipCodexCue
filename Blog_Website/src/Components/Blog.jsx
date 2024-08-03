import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger);

const Blog = (props) => {

  console.log(props.images)
  useEffect(() => {
    props.blogs.forEach((_, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.BlogPost-${index}`,
          start: "40% center",
          end: "bottom center",
          scrub: true,
        }
      });

      tl.to(`.BlogPost-${index} .BlogTitle`, {
        x: -100,
        opacity: 0,
        duration: 2
      }).to(`.BlogPost-${index} .BlogBody`, {
        x: -50,
        opacity: 0,
        duration: 2
      }).to(`.img-${index}`,{
        opacity:0,
        x:200,
        duration:1,
        scrub: true,
      });
    });
  },[props.blogs, props.images]);

  return (
    <div className="blog relative overflow-x-hidden sm:relative">
      {
      
      props.blogs.map((data, id) => (
        <section key={id} className={`BlogPost BlogPost-${id} bg-teal grid grid-cols-12 m-14 h-screen   sm:grid sm:grid-cols-12 sm:m-14 sm:h-screen`}>
          <div className="left sm:col-span-7  col-span-12 ">
            <span className="BlogTitle sm:underline underline sm:font-extrabold font-extrabold text-3xl sm:text-3xl sm:p-14 p-2">{id + 1} Blog Title</span>
            <h1 className="sm:p-14 p-4 sm:font-extrabold font-extrabold sm:text-4xl text-3xl title">{data.title}</h1>
            <p className=" BlogBody sm:text-2xl text-2xl">{data.body}</p>
          </div>
          <div className="right sm:col-span-5 col-span-12 ml-10 ">
          {props.images[id] && (
              <img
                src={props.images[id]}
                alt={`Image for blog ${id + 1}`}
                className={`img-${id} sm:m-10 sm:w-[20rem] sm:h-[20rem]  sm:object-cover mb-10 `}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blog;
