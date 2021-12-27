import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer class="sm:w-full lg:w-11/12 container mx-auto bg-white py-8 border-t border-gray-400">
        <div class="container flex px-3 py-8 ">
            <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full lg:w-1/2 ">
                    <div class="px-3 md:px-0">
                        <div class="flex flex-row gap-4">
                            <div>
                                <h3 class="font-bold text-gray-900">Klantenservice</h3>
                                    <ul>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Bestellingen en Leveringen</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Contact Opnemen</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Betalen</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Retourneren</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Garantie</a>
                                        </li>
                                    </ul> 
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900">Bedrijf</h3>
                                    <ul>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Over ons</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Contact</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Algemene Voorwaarden</a>
                                        </li>
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Jobs</a>
                                        </li>
                                    </ul> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div class="px-3 md:px-0">
                        <h3 class="font-bold text-gray-900">Wil jj ons volgen?</h3>
                        <ul class="flex flex-row justify-between">
                            <li>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                            </li>
                            <li>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                            </li>
                            <li>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>
                            <li>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;