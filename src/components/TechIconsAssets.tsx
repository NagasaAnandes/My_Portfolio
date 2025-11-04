'use client';
// Import all tech icons from assets/icons folder
// Make sure to place your icon files (SVG or PNG) in the assets/icons directory
// with the following naming convention:
// html.svg, css.svg, javascript.svg, etc. (lowercase)

// Example imports - uncomment and adjust based on your actual icon files

import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import phpIcon from "../assets/icons/php.svg";
import pythonIcon from "../assets/icons/python.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import flutterIcon from "../assets/icons/flutter.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import golangIcon from "../assets/icons/golang.svg";


interface TechIconsMap {
    [key: string]: string;
}

// Export the icons map
// Uncomment and update when you have the actual icon files
export const techIconsAssets: TechIconsMap = {
    HTML: htmlIcon.src,
    CSS: cssIcon.src,
    JavaScript: javascriptIcon.src,
    React: reactIcon.src,
    NextJS: nextjsIcon.src,
    TailwindCSS: tailwindIcon.src,
    Laravel: laravelIcon.src,
    PHP: phpIcon.src,
    Python: pythonIcon.src,
    MySQL: mysqlIcon.src,
    MongoDB: mongodbIcon.src,
    Flutter: flutterIcon.src,
    Kotlin: kotlinIcon.src,
    Golang: golangIcon.src,
};

// Helper component to render icon
interface TechIconProps {
    iconPath?: string;
    alt: string;
    className?: string;
}

export function TechIcon({ iconPath, alt, className = "w-12 h-12" }: TechIconProps) {
    if (!iconPath) {
        return (
            <div className={`${className} flex items-center justify-center bg-linear-to-br from-gray-400 to-gray-600 rounded-lg`}>
                <span className="text-white text-xs">{alt.slice(0, 2).toUpperCase()}</span>
            </div>
        );
    }

    // Check if it's SVG or image
    const isSvg = iconPath.endsWith('.svg');

    if (isSvg) {
        return <img src={iconPath} alt={alt} className={className} />;
    }

    return <img src={iconPath} alt={alt} className={className} />;
}
