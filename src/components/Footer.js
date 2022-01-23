import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer class="xsm:w-full lg:w-11/12 mx-auto bg-white py-8 border-t border-gray-400 px-4">
                        <div class="flex flex-row w-full gap-5 flex-wrap">
                            <div>
                                <h3 class="font-bold text-gray-900">Klantenservice</h3>
                                    <ul>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Bestellingen en Leveringen</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Contact Opnemen</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Betalen</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Retourneren</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Garantie</button>
                                        </li>
                                    </ul> 
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900">Bedrijf</h3>
                                    <ul>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Over ons</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Contact</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Algemene Voorwaarden</button>
                                        </li>
                                        <li>
                                            <button class="inline-block no-underline hover:text-black hover:underline py-1 text-left">Jobs</button>
                                        </li>
                                    </ul> 
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900">Wil jj ons volgen?</h3>
                                <ul class="flex flex-row justify-between">
                                    <li>
                                        <button className="inline-block no-underline hover:text-black hover:underline py-1"><FontAwesomeIcon icon={faFacebook}/></button>
                                    </li>
                                    <li>
                                        <button className="inline-block no-underline hover:text-black hover:underline py-1"><FontAwesomeIcon icon={faInstagram}/></button>
                                    </li>
                                    <li>
                                        <button className="inline-block no-underline hover:text-black hover:underline py-1"><FontAwesomeIcon icon={faTwitter}/></button>
                                    </li>
                                    <li>
                                        <button className="inline-block no-underline hover:text-black hover:underline py-1"><FontAwesomeIcon icon={faLinkedin}/></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </footer>
    )
}

export default Footer;