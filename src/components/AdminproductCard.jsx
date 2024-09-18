import React, { useState } from 'react';
import { EditProd } from './Models';

const AdminproductCard = ({ setProdId, pordId, i, setLoading, deleteMod, setDeleteMod }) => {
    const [editMod, setEditMod] = useState(false); // State to handle edit modal visibility
    const [product, setProduct] = useState(null); // State to handle selected product for editing

    // Function to close the edit modal
    const closeEditMod = () => {
        setEditMod(false);
    };

    // Utility function to trim text
    function trimTextToWordCount(text, wordCount) {
        const words = text.split(' ');
        if (words.length > wordCount) {
            return words.slice(0, wordCount).join(' ') + '...';
        }
        return text;
    }

    return (
        <>
            <div
                onClick={() => { setEditMod(true); setProduct(i); }}
                className="group h-fit relative border shadow-xl bg-gray-200 border-muted rounded-lg overflow-hidden xl:w-[500px] hover:scale-105 transition-all duration-500"
            >
                
                <div className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-[1.5rem]">{i.title}</h3>
                    <p className="text-muted-foreground text-[1.06rem] pb-4">
                        {i.description}
                    </p>
                    {/* <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium text-primary">{`$ ${i.price}`}</span>
                    </div> */}
                    <div className="flex flex-col gap-2">
                        {/* Edit Button */}
                        <button
                            size="sm"
                            onClick={() => { setEditMod(true); setProduct(i); }}
                            className="bg-[#18181B] px-2 py-2 rounded-md text-white font-semibold hover:bg-primary/90"
                        >
                            Edit
                        </button>
                        {/* Delete Button */}
                        <button
                            size="sm"
                            onClick={() => { setDeleteMod(true); setProdId(i._id); }}
                            className="bg-[#18181B] px-2 py-2 rounded-md text-white font-semibold hover:bg-primary/90"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Edit Product Modal */}
            {editMod && (
                <>
                    <EditProd mod={closeEditMod} pro={product} />
                    <style>{`body { overflow: hidden; }`}</style>
                </>
            )}
        </>
    );
};

export default AdminproductCard;
