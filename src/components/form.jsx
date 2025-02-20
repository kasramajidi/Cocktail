import { useState } from "react";

function Form() {
    const [inputData, setinputData] = useState(""); 
    const [product, setproduct] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const searchCocktail = async () => {
        if (!inputData) return;

        setLoading(true); 
        setError(null);
        setproduct([]);

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputData}`);
            const data = await response.json();

            if (data.drinks) {
                setproduct(data.drinks);
            } else {
                setError("No Matching Cocktails Found...");
            }
        } catch (err) {
            setError("No Matching Cocktails Found...");
        }

        setLoading(false);
    };

    return (
        <section className="w-full flex flex-col items-center justify-center min-h-screen">
            <div className="border-2 border-white p-4 rounded-md shadow-lg w-1/2 bg-white">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={inputData}
                        onChange={(e) => setinputData(e.target.value)}
                        className="p-2 text-black border-none outline-none rounded-l-md bg-[#E2E8F0] w-full"
                        placeholder="Search for a cocktail..."
                    />
                    <button
                        onClick={searchCocktail}
                        className="bg-[#10B981] text-white p-2 rounded-r-md hover:bg-[#059e72]"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* نمایش لودینگ */}
            {loading && (
                <div className="mt-6 flex justify-center">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
                </div>
            )}

            {/* نمایش خطا در صورت عدم یافتن نتیجه */}
            {error && <p className="pt-32 text-3xl text-center text-[#0F172A]">{error}</p>}

            {/* نمایش نتایج */}
            <div className="w-full mt-[120px] flex items-center justify-center gap-4 flex-wrap">
                {product.map((drink) => (
                    <div key={drink.idDrink} className="w-[352px] bg-white shadow-lg rounded-xl overflow-hidden">
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-[200px] object-cover" />
                        <div className="px-4 flex flex-col items-start gap-y-1 py-[20px]">
                            <h4 className={'text-[32px]'}>{drink.strDrink}</h4>
                            <h4 className="text-[18px] font-bold">{drink.strDrink}</h4>
                            <span className="text-[14px] text-gray-500">{drink.strCategory}</span>
                            <button className="text-white bg-[#10B981] px-3 py-[6px] rounded-xl mt-2 hover:bg-[#059e72]">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Form;

