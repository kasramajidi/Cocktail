import { useState, useEffect } from "react";

function Newsletter() {
    const [showMessage, setShowMessage] = useState(false)   

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 2000); 

            return () => clearTimeout(timer); 
        }
    }, [showMessage]);
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="bg-white shadow-md w-[544px] h-[356px] py-7 px-10">
                <h1 className="font-light text-[32px] text-[#0F172A] text-center">Our Newsletter</h1>
                <form className="flex justify-center flex-col gap-2">
                    <label htmlFor="name" className="text-[#0F172A] text-sm font-light">Name</label>
                    <input type="text" id="name" className="bg-[#F8FAFC] border border-[#E2E8F0] border-solid rounded-md h-8" />
                    <label htmlFor="LastName" className="text-[#0F172A] text-sm font-light">Last Name</label>
                    <input type="text" id="LastName" className="bg-[#F8FAFC] border border-[#E2E8F0] border-solid rounded-md h-8" />
                    <label htmlFor="Email" className="text-[#0F172A] text-sm font-light">Email</label>
                    <input type="text" id="Email" className="bg-[#F8FAFC] border border-[#E2E8F0] border-solid rounded-md h-8" />
                    <button type="submit" className="text-[#FFFFFF] shadow-md text-sm bg-[#10B981] py-2 px-3 rounded-md cursor-pointer" onClick={(e) =>{e.preventDefault(); setShowMessage(true)}}>Submit</button>
                </form>
            </div>
            {showMessage && (
                <div className="fixed top-16 right-10 bg-white shadow-lg rounded-md p-4 flex items-center gap-3 border">
                    <span className="text-gray-700">Success, check your email</span>
                    <button onClick={() => setShowMessage(false)}>
                        <span className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer">x</span>
                    </button>
                </div>
            )}
        </section>
    );
}

export default Newsletter;
