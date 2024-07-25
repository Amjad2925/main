import React from "react";
import Projectitem from "../components/Projectitem";
import { Assets } from "../components/Assets";
import Head from "next/head";
import TextGradient from "./TextGradient";
const Projects = () => {

  
  return (
    <>
   
  <div className=" bg-black   w-full min-h-screen text-white  px-4 sm:px-16 ">
      <div className="flex flex-col  space-y-10">
        <h1 className="text-[30px] md:text-[40px] border-b-2 text-white bold">PROJECTS</h1>
        <TextGradient>What I Have Done </TextGradient>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* start from here */}
          
           <Projectitem
            nam={Assets.projects.foodiezz.name}
            imagesrc={Assets.projects.foodiezz.imagesrc}
            technology={Assets.projects.foodiezz.technology}
            demo={Assets.projects.foodiezz.demo}
          />
          
          
          <Projectitem
            nam={Assets.projects.beach.name}
            imagesrc={Assets.projects.beach.imagesrc}
            technology={Assets.projects.beach.technology}
            demo={Assets.projects.beach.demo}
          />
          
          
          
         
          <Projectitem
            nam={Assets.projects.typeahead.name}
            imagesrc={Assets.projects.typeahead.imagesrc}
            technology={Assets.projects.typeahead.technology}
            demo={Assets.projects.typeahead.demo}
          />

          {/* ends here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
