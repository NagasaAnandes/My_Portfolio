'use client';

interface TechIconsMap {
    [key: string]: string;
}

// Export the icons map
export const techIconsAssets: TechIconsMap = {
    HTML: "/icons/html.svg",
    CSS: "/icons/css.svg",
    JavaScript: "/icons/javascript.svg",
    React: "/icons/react.svg",
    NextJS: "/icons/nextjs.svg",
    TailwindCSS: "/icons/tailwind.svg",
    Laravel: "/icons/laravel.svg",
    PHP: "/icons/php.svg",
    Python: "/icons/python.svg",
    MySQL: "/icons/mysql.svg",
    MongoDB: "/icons/mongodb.svg",
    Flutter: "/icons/flutter.svg",
    Kotlin: "/icons/kotlin.svg",
    Golang: "/icons/golang.svg",
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
