export default function Dog({ image, text }) {
    return (
        <div className="mr-2 mb-4">
            <img src={image} className="mb-4 w-full border-solid border-2 border-indigo-400" />
            <h6>{text}</h6>
        </div>
    )
}