// import React from 'react'

function BookDiscription({ show, item }) {
  if (!show) {
    return null;
  }
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="vitarow" className="modal w-full ">
        <div className="modal-box  ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
           <div>
            <h1 className="text-[20px] font-bold mb-5">{item.name}</h1>
            <div>
              <img src={item.image} alt="" className="w-50 h-1/2" />
            </div>
            <div>
              <div>
                <p className="mt-20 text-lg text-semibold">{item.description}</p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default BookDiscription;
