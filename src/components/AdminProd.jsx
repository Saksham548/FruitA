import React, { useEffect, useState } from 'react';
import { HiMiniInbox } from 'react-icons/hi2';
import AdminproductCard from './AdminproductCard';
import { AddProd, DeleteModel } from './Models';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminProd = () => {
    // State hooks for static products and modals
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false); // Keeping loading state to simulate loading spinner

    const [deleteMod, setDeleteMod] = useState(false);
    const [addProMod, setAddProMod] = useState(false);

    const [pordId, setProdId] = useState(null);

    // Modal control handlers
    const handleCloseMod = () => {
        setDeleteMod(false);
    };
    const handleCloseAddProMod = () => {
        setAddProMod(false);
    };

    useEffect(() => {

        const getAllFaqs = async () => {
            axios.get(`https://fruit-ai-five-snowy.vercel.app/faqs`).then((req, res) => {
                setProducts(req.data);
            }).catch((e) => {
                console.log(e);
                toast.error("Server Error")
            })
        }
        getAllFaqs();
    }, [])

    console.log(products);


    return (
        <div className='h-screen'>
            <div className="w-full p-3 rounded-md grid relative sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-center items-center mt-1">
                <h1 className="text-[2.4rem] font-bold absolute top-[-60px]">Products</h1>

                {/* Loading Spinner Simulation */}
                {loading ? (
                    <div className="w-full flex justify-center items-center absolute h-full">
                        <div className="animate-spin rounded-full border-4 border-[#736f6f] border-primary border-t-transparent h-8 w-8" />
                        <span className="text-[#625757] font-semibold ml-3">Loading...</span>
                    </div>
                ) : (
                    <>
                        {/* Product List */}
                        {products.length !== 0 ? (
                            products.map((i, x) => (
                                <AdminproductCard
                                    key={i._id}
                                    pordId={i._id}
                                    setProdId={setProdId}
                                    i={i}
                                    setLoading={setLoading}
                                    deleteMod={deleteMod}
                                    setDeleteMod={setDeleteMod}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full absolute top-[40%] gap-5">
                                <span>No Product Found...!</span>
                                <HiMiniInbox className="text-[4rem] text-gray-600" />
                            </div>
                        )}
                    </>
                )}

                {/* Add Product Button */}
                <div onClick={() => setAddProMod(true)} className="fixed bottom-10 shadow-md right-10">
                    <button className="bg-[#18181B] px-12 py-3 shadow-xl rounded-full text-white font-semibold hover:bg-primary/90">
                        Add Product +
                    </button>
                </div>
            </div>

            {/* Delete Modal */}
            {deleteMod && (
                <>
                    <DeleteModel mod={handleCloseMod} id={pordId} />
                    <style>{`body{ overflow:hidden; }`}</style>
                </>
            )}

            {/* Add Product Modal */}
            {addProMod && (
                <>
                    <AddProd mod={handleCloseAddProMod} />
                    <style>{`body{ overflow:hidden; }`}</style>
                </>
            )}
        </div>
    );
};

export default AdminProd;
