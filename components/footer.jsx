import { LuArrowUpRight } from "react-icons/lu";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 md:gap-8 gap-y-12">

                    <div className="col-span-12 lg:col-span-8 xl:col-span-8 text-center lg:text-start">
                        <a 
                            href="mailto:your.email@gmail.com" 
                            className={"get-in-touch"}
                            data-cursor-text={"Let's talk"}
                        >
                           CONTACT
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 xl:col-span-4 lg:mt-4">
                        <div className="socials items-center lg:items-start">
                            <a href="https://github.com/">
                                <div className='social'>Github <LuArrowUpRight /></div>
                            </a>
                            <a href="https://www.linkedin.com/">
                                <div className='social'>Linkedin <LuArrowUpRight /></div>
                            </a>
                           
                            <a href="https://www.youtube.com/">
                                <div className='social'>Youtube <LuArrowUpRight /></div>
                            </a>
                        </div>

                        <div className="credits mt-6 text-center lg:text-start">
                            <p> © Développé par<a href="https://github.com/theophileGIT">Berthe Théophile </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

                    