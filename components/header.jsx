import { themes } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);

    const onThemeSelect = (updatedTheme) => {
        const oldTheme = localStorage.getItem("theme");
        if (updatedTheme === oldTheme) return;

        const body = document.getElementsByTagName("body")[0];
        body.classList.remove(`theme-${oldTheme}`);
        body.classList.add(`theme-${updatedTheme}`);
        localStorage.setItem("theme", updatedTheme);

        setSelectedTheme(updatedTheme);
    };

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            setSelectedTheme(theme);
        } else {
            setSelectedTheme("default");
        }
    }, []);

    return (
        <header>
            <div className="container mx-auto">
                <div className={"themes-list"}>
                    {themes.map((t,i) => {
                        return (
                            <div 
                                style={{ backgroundColor: t.bgColor }}
                                className={`theme${t.name === selectedTheme ? " active" : ""}`} 
                                key={i} 
                                onClick={() => onThemeSelect(t.name)} 
                                data-cursor-text={t.label}
                            >
                                { t.imgSrc && <Image src={`/images/themes/${t.imgSrc}`} alt={t.name} width={40} height={40} /> }
                            </div>
                        );
                    })}
                </div>

                <div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </header>
    );
};

export default Header;