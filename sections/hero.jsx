import ImagesMarquee from "@/components/imagesMarquee";
import gsap from "gsap";
import SplitType from 'split-type';
import { useGSAP } from "@gsap/react";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            new SplitType('.title', { types: 'chars' }).chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1.5,
                ease: 'power4.out',
            }
        );
    });

    return (
        <section className={"hero"}>
            <div className="container mx-auto">
                <div className={"title"}>
                    <h1>
                        Your<div className={"new-line"} /> Full Name
                    </h1>
                </div>
            </div>

            <ImagesMarquee />

            <div className="container mx-auto">
                <div className={"subtitle"}>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 xl:col-span-8 description">
                            <p>
                                <b className={"accent"}>Lorem Ipsum Dolor </b> sit amet, consectetur adipiscing elit sed <b><a href="https://www.apple.com/">Labore Et</a></b> dolore magna aliqua ut <a  href="https://www.apple.com/">Veniam</a> quis nostrud exercitation. 
                            </p>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, libero ac pellentesque volutpat, erat justo hendrerit lorem, non vehicula lorem velit nec nisi. Curabitur id sapien vitae enim tincidunt vulputate vel a arcu.
                            </p>
                        </div>
                        
                        <div className="2xl:col-span-2 2xl:col-start-11 col-span-3 col-start-10 work-details-col">
                            <div className={"work-details"}>
                                <p className={"accent"}>Lorem ipsum</p>
                                <p><a href="https://www.apple.com/fr/">Apple --</a></p>
                                <p><a href="https://www.google.fr/maps/place/Marseille/@43.280227,5.2158399,11z/data=!3m1!4b1!4m6!3m5!1s0x12c9bf4344da5333:0x40819a5fd970220!8m2!3d43.3025742!4d5.3690743!16zL20vMGpkdHQ?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Google Map--</a></p>
                                <p><a href="https://www.sony.fr/">Sony --</a></p>
                                <p><a href="https://www.leagueoflegends.com/fr-fr/">League of legend --</a></p>
                                <p><a href="https://www.decathlon.fr/"> Decatlon--</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;