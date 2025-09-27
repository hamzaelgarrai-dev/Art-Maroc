import React from 'react'

function ModalAdmin({ isOpen, onClose }) {
     if (!isOpen) return null;
  return (
    <div id="Modal" class=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white w-96 p-6 rounded-xl shadow-lg">
                

                <form id="ModalForm" class="flex flex-col gap-4">
                    <input type="hidden" id="editId"/>

                    <div className="text-right">
                        <button onClick={onClose} className='bg-red-500 text-white w-10 h-8 rounded-md cursor-pointer'>X</button>
                    </div>

                    <div>
                        <label class="text-gray-700">Titre</label>
                        <input type="text" id="TitreInput" class="w-full border rounded-lg p-2" required/>
                    </div>
                  

                    <div>
                        
                        
                        <label for="Categorie"
                            class="block mb-2 text-sm font-medium  dark:text-white">Categoties</label>
                        <select id="editCategorie" 
                            class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                            <option value="">Sélectionnez Categorie</option>
                            <option value="Tapis">Tapis</option>
                            <option value="Caftan">Caftan</option>
                            <option value="Zelige">Zelige</option>
                        </select>
                        
                    </div>

                    
                    <div class="w-full">
                        <label for="Description"
                            class="block mb-2 text-sm font-medium  dark:text-white">
                            Description
                        </label>
                        <textarea id="Description" rows="3" maxlength="500"
                            placeholder="Description..." class="bg-gray-50 border border-gray-300  text-sm rounded-lg 
           focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none" required></textarea>
                    </div>

                      <div>
                        <label class="text-gray-700">Region/Ville</label>
                        <input type="text" id="Region/ville" class="w-full border rounded-lg p-2" required/>
                    </div>

                    <div class="flex flex-col justify-between gap-4 mt-4">
                        <button  type="button" id="cancelEdit" class="px-4 py-2 bg-[#0080FC] rounded-lg text-white">Upload Image</button>
                        <button type="submit" class="px-4 py-2 bg-[#F97316] text-white rounded-lg">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ModalAdmin