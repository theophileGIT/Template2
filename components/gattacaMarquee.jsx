import Marquee from "react-fast-marquee";

const GattacaMarquee = () => {
    return (
        <div className={"gattaca-marquee"}>
            <Marquee direction="right" autoFill speed="30">TBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBT</Marquee>
            <Marquee direction="right" autoFill speed="30">TBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTB</Marquee>
            <Marquee direction="right" autoFill speed="30">TBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTB</Marquee>
            <Marquee direction="right" autoFill speed="30">TBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBTBT</Marquee>
        </div>
    );
};

export default GattacaMarquee;