export default function IconService({fileName, altText, service}) {
    return (
        <div className="flex items-center justify-center w-44 h-44 border border-white rounded-full m-6">
            <img src={`./${fileName}`} alt={altText} width="90" height="90" />
            {/* <p className="text-white block">{service}</p> */}
        </div>
    );
}