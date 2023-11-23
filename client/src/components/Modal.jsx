/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

function Modal({ closeModal, isModalOpen }) {

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? "" : "hidden"}`}>
            <div className="modal-container">
                <div className="bg-blue-500 text-center p-5 h-96 lg:w-[500px] rounded">
                    {/* modal content  */}
                    <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">Please Login Here!</h2>
                    <form className="px-4">
                        <div className="mb-3">
                            <input
                                className="w-full rounded-md border-black bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-blue-900 focus:shadow-md"
                                type="email" name="email" id="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="mb-5">
                            <input
                                className="w-full rounded-md border-black bg-white py-3 px-6 text-base font-medium text-gray-900 outline-none focus:border-blue-900 focus:shadow-md"
                                type="password" name="password" id="password" placeholder="Enter Your Password" />
                        </div>
                        <div>
                            <button className="hover:shadow-md rounded-md bg-blue-400 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none">Login</button>
                        </div>
                    </form>

                    {/* modal closing btn  */}
                    <button onClick={closeModal} className="hover:bg-black hover:text-white bg-gray-300 text-black font-semibold py-2 px-4 rounded mt-8">
                        Close
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Modal