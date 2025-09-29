import React from 'react'

function ModalAdmin({ isOpen, onClose }) {
     if (!isOpen) return null;
  return (
    <div id="Modal" className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-xl shadow-lg">
                

                <form id="ModalForm" className="flex flex-col gap-4">
                    <input type="hidden" id="editId"/>

                    <div className="text-right">
                        <button onClick={onClose} className='bg-red-500 text-white w-10 h-8 rounded-md cursor-pointer'>X</button>
                    </div>

                    <div>
                        <label className="text-gray-700">Titre</label>
                        <input type="text" id="TitreInput" className="w-full border rounded-lg p-2" required/>
                    </div>
                  

                    <div>
                        
                        
                        <label for="Categorie"
                            className="block mb-2 text-sm font-medium  dark:text-white">Categoties</label>
                        <select id="editCategorie" 
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                            <option value="">Sélectionnez Categorie</option>
                            <option value="Tapis">Tapis</option>
                            <option value="Caftan">Caftan</option>
                            <option value="Zelige">Zelige</option>
                        </select>
                        
                    </div>

                    
                    <div className="w-full">
                        <label for="Description"
                            className="block mb-2 text-sm font-medium  dark:text-white">
                            Description
                        </label>
                        <textarea id="Description" rows="3" maxlength="500"
                            placeholder="Description..." className="bg-gray-50 border border-gray-300  text-sm rounded-lg 
           focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none" required></textarea>
                    </div>

                      <div>
                        <label className="text-gray-700">Region/Ville</label>
                        <input type="text" id="Region/ville" className="w-full border rounded-lg p-2" required/>
                    </div>

                    <div className="flex flex-col justify-between gap-4 mt-4">
                        <button  type="button" id="cancelEdit" className="px-4 py-2 bg-[#0080FC] rounded-lg text-white">Upload Image</button>
                        <button type="submit" className="px-4 py-2 bg-[#F97316] text-white rounded-lg">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ModalAdmin