import React from "react";
import AdminPanelBoilerplate from "../../AdminPanelBoilerplate";

const Complaint = () => {
  return (
    <AdminPanelBoilerplate>
      <div className="m-10">
        <div className="bg-green-900 rounded">
          <p className="p-3 text-white">Add Complaints</p>
        </div>

        <div className="border-2 border-green-900 rounded-lg p-10 mt-5">
          <div className="grid md:grid-cols-4 ">
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Complaint by *"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Complaint type *"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Phone"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Date"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-4 mt-5">
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Actions Taken *"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="text"
                value="Description"
              />
            </div>
            <div>
              <input
                className="border-2 rounded-lg p-2 border-green-700 w-[75%]"
                type="file"
              />
            </div>
          </div>
          <div className="m-2 flex justify-end ">
            <div className="bg-green-900 rounded ">
              <p className="px-4 p-2 text-white">Save</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded mt-5">
          <p className="p-3 text-white">Complaint List</p>
        </div>

        <div className="border-2 rounded-xl border-green-900 my-5">
          <div className="bg-green-900 grid md:grid-cols-6 text-white justify-center rounded-lg p-3">
            <div> Complaint by</div>
            <div>Complaint type</div>
            <div>Source</div>
            <div>Phone</div>
            <div>Date</div>
            <div>Action</div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </AdminPanelBoilerplate>
  );
};

export default Complaint;
