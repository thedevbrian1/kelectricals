import classnames from "classnames";

export default function Typography({ variant, textColor, fontSize, fontWeight, textAlign, children }) {
    if (variant === "h1") {
        return (
            <h1 className={`text-${textColor} text-${fontSize} font-${fontWeight} `}>{children}</h1>
        )
    } else if ( variant === "h2") {
        return (
            <h2 className={`text-${textColor} text-${fontSize} font-${fontWeight}`}>{children}</h2>
        )
    } else if (variant === "h3") {
        return (
            <h3 className={`text-${textColor} text-${fontSize} font-${fontWeight}`}>{children}</h3>
        )
    } else if (variant === "h4") {
        return (
            <h4 className={`text-${textColor} text-${fontSize} font-${fontWeight}`}>{children}</h4>
        )
    } else if (variant === "h5") {
        return (
            <h5 className={`text-${textColor} text-${fontSize} font-${fontWeight}`}>{children}</h5>
        )
    } else if (variant === "h6") {
        return (
            <h6 className={`text-${textColor} text-${fontSize} font-${fontWeight}`}>{children}</h6>
        )
    } else if (variant === "p") {
        return (
            <p className={`text-${textColor} text-${fontSize} font-${fontWeight} text-${textAlign}`}>{children}</p>
        )
    }
}