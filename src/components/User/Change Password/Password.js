import React from "react";

const Password = () => {
  return (
    <>
      <div className="mx-4">
        <form action="" method="POST">
          <div className="profile-heading">
            <h2 className="text-4xl italic">Manage Password</h2>
          </div>
          <div className="grid grid-cols-1 mt-4 w-3/4 gap-y-6">
            <input className="rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box h-14"
              type="text"
              placeholder="Enter Old Password"
              onChange={""}
            />

            <input className="rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box h-14"
              type="text"
              placeholder="Enter New Password"
              onChange={""}
            />

            <input className="rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box h-14"
              type="text"
              placeholder="Enter Confirm Password"
              onChange={""}
            />
          </div>
          <div className="mt-5">
            <button className="web-btn-2 px-12 py-3" type="submit">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Password;
