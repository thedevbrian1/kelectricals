import IconService from "./IconService";

export default function ImageBackground({title, image, children}) {
    return (
        <div className={`w-full bg-cover bg-center mt-36 ${image}`}>
            <div className="flex justify-center h-full w-full bg-black bg-opacity-80">
                <div className="text-center mt-12">
                    <h1 className="text-white text-2xl font-semibold md:text-3xl">{title}</h1>
                    
                    {children}
                    
                </div>
            </div>
        </div>
    )
}