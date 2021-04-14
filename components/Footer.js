import Typography from "./Typography";

export default function Footer() {
    return(
        <div className="md:flex justify-between p-10 bg-indigo-900 text-indigo-400">
            <div className="md:w-1/2">
                <h1 className="text-lg mb-2">Join the newsletter</h1>
                <form className="flex">
                    <input type="email" className="w-full rounded-l outline-none focus:bg-indigo-100 px-2" placeholder="abc@gmail.com" />
                    <button className="bg-red-500 hover:bg-red-400 text-white px-4 rounded-r">
                        Submit
                    </button>
                </form>
                
            </div>
            <div className="flex items-center">
                {/* <p>Copyright &copy; 2020 Notnice</p> */}
                <Typography variant="p" children="Copyright &copy; Notnice" textColor="red-500" fontSize="base" textAlign="left" /> 
            </div>
        </div>
    )
}