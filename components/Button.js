import classnames from "classnames"
import Link from "next/link"

export default function Button({ to, bgColor, textColor, borderColor,hoverTextColor, hoverBgColor,margin, variant, children }) {
    return (
        // <button className={classnames(`inline-block py-2 px-4 text-${textColor} hover:text-${hoverTextColor} hover:bg-${hoverBgColor} rounded`, {
        //     [`bg-${bgColor}`]: variant === 'filled',
        //     [`border-2 border-${borderColor}`]: variant === 'outlined'
        // })}>
        //     {children}
        // </button>
        <Link href={to}>
            <a className={classnames(`inline-block py-3 px-6 ${margin} text-${textColor} hover:text-${hoverTextColor} hover:bg-${hoverBgColor} rounded-xl`, {
                [`bg-${bgColor}`]: variant === 'filled',
                [`border-2 border-${borderColor}`]: variant === 'outlined'
            })}>
                {children}
            </a>
        </Link>
    )
}