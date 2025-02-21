import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataFunction = async () => {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (response.data.drinks) {
                    setProduct(response.data.drinks[0]);
                } else {
                    setError("No Matching Cocktails Found...");
                }
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        dataFunction();
    }, [id]);

    if (loading) {
        return (
            <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-xl text-red-500 mt-6">{error}</p>;
    }

    if (!product) {
        return <p className="text-center text-xl text-gray-500 mt-6">No product found.</p>;
    }

    return (
        <div className="flex items-center justify-center bg-[#F8FAFC]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center justify-center">
                    <Link to="/" className="bg-[#10B981] text-white shadow-lg cursor-pointer py-1.5 px-3 rounded-md">
                        Back Home
                    </Link>
                    <h1 className="text-[40px] text-[#0F172A] font-bold mt-4">{product.strDrink}</h1>
                </div>
                <div className="flex justify-between items-center gap-8 w-[1120px]">
                    <img src={product.strDrinkThumb} alt={product.strDrink} className="w-[448px] h-[448px] rounded-md shadow-lg" />
                    <div className="flex flex-col justify-start gap-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-[#6EE7B7] text-[#047857] py-1 px-2">Name:</span>
                            <span className="text-[#0F172A] font-normal">{product.strDrink}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#6EE7B7] text-[#047857] py-1 px-2">Category :</span>
                            <span className="text-[#0F172A] font-normal">{product.strCategory}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#6EE7B7] text-[#047857] py-1 px-2">Glass :</span>
                            <span className="text-[#0F172A] font-normal">{product.strGlass}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#6EE7B7] text-[#047857] py-1 px-2">Ingredients :</span>
                            <span className="text-[#0F172A] font-normal">{product.strIngredient1}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="bg-[#6EE7B7] text-[#047857] py-1 px-2">Instructions:</span>
                            <span className="text-[#0F172A] font-normal">{product.strInstructions}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

