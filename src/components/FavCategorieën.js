import React from "react";

const FavCategorieën = () => {
    return (
        <div className="lg:w-11/12 sm:w-full m-auto mt-10 container mx-auto" >
            <div className="px-3 py-8">
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold">Favoriete categorieën</h1>
                <br/>
                <div className="flex flex-wrap lg:gap-5 sm:gap-1">
                    <div className="lg:w-96 md:w-40 rounded-lg transition duration-300 ease-in-out hover:scale-105" style={{ backgroundColor: `rgba(218,201,164,0.2)` }} >
                        <img
                            src="https://media.os.fressnapf.com/cms/2020/08/5f352fc07c630-5f352fc07c631FN_Kategorie_Hund_Hundefutter_Hundefutter_1200x527.jpg.jpg?t=cmsimg_300"
                            alt="foto"
                            className="w-full object-cover max-h-full"/>
                         <p className="px-3 py-3"> Voeding voor honden  </p>
                    </div>
                    <div className="lg:w-96 md:w-40 rounded-lg transition duration-300 ease-in-out hover:scale-105" style={{ backgroundColor: `rgba(218,201,164,0.2)` }}>
                        <img
                            src="https://media.os.fressnapf.com/cms/2020/08/5f3110c9a6d01-5f3110c9a6d02FN_Kategorie_Kleintiere_Kleintierfutter_1200x527.jpg.jpg?t=cmsimg_300"
                            alt="foto"
                            className="w-full object-cover max-h-full"/>
                         <p className="px-3 py-3"> Voeding voor knaagdieren </p>
                    </div>
                    <div className="lg:w-96 md:w-40 rounded-lg transition duration-300 ease-in-out hover:scale-105" style={{ backgroundColor: `rgba(218,201,164,0.2)` }} >
                        <img
                            src="https://media.os.fressnapf.com/cms/2020/08/5f3530012bb63-5f3530012bb64FN_Kategorie_Katze_Katzenfutter_1200x527.jpg.jpg?t=cmsimg_300"
                            alt="foto"
                            className="w-full object-cover max-h-full"/>
                         <p className="px-3 py-3"> Voeding voor katten</p>
                    </div>
                    <div className="lg:w-96 md:w-40 rounded-lg transition duration-300 ease-in-out hover:scale-105" style={{ backgroundColor: `rgba(218,201,164,0.2)` }} >
                        <img
                            src="https://media.os.fressnapf.com/cms/2020/08/5f316b6576d18-5f316b6576d1aKategorie_Bilder_WilvoegelFN_Kategorie_Wilvoegel_Wilvoegel_1200x527.jpg.jpg?t=cmsimg_300"
                            alt="foto"
                            className="w-full object-cover max-h-full"/>
                        <p className="px-3 py-3"> Voeding voor vogels</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FavCategorieën;
