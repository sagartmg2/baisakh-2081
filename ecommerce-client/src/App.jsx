import { CiMail } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"

function App() {
    return (
        <>
            <header className="bg-[#7E33E0] text-white p-4 flex justify-between">
                <div className="flex ">
                    <CiMail /> emai@gmaicom
                    <FaPhoneAlt /> 987325345234
                </div>
                <div>login loginicon cart</div>
            </header>
        </>
    )
}

export default App
