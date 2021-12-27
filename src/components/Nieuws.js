import React from "react";

const Nieuws = () => {
    return (
       <div className="lg:w-11/12 sm:w-full m-auto mb-10 container mx-auto" >
        <div className="px-3 py-8">
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold"> Nieuws </h1> 
          <br/>
          <div className="flex flex-wrap lg:gap-5 sm:gap-1">
            <img
              src="https://media.os.fressnapf.com/cms/2021/12/NL_KW50_Sedatives_SG_OS.6erN_1-61c4284676bd7.jpg?t=cmsimg_540"
              alt="foto"
              className="object-cover max-h-full"
              style={{width: "49%", minWidth: "15rem"}}/>
            <img
              src="https://media.os.fressnapf.com/cms/2021/06/210401_Teaser_540x270.jpg?t=cmsimg_540"
              alt="foto"
              className="object-cover max-h-full"
              style={{width: "49%", minWidth: "15rem"}}/>
            <img
              src="https://media.os.fressnapf.com/cms/2021/10/BE_KW23_CatLitter_SG_OS.6erN_1.jpg?t=cmsimg_540"
              alt="foto"
              className="object-cover max-h-full"
              style={{width: "49%", minWidth: "15rem"}}/>
            <img 
              src="https://media.os.fressnapf.com/cms/2021/10/BE_KW38_GetReadyforWinter_SG_OS.6er_1.jpg?t=cmssprite_l"
              alt="foto"
              className="object-cover max-h-full"
              style={{width: "49%", minWidth: "15rem"}}/>
          </div>
        </div>
      </div>
    );
}
export default Nieuws;