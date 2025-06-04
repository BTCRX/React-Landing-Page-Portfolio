import React from "react";

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-body px-6 py-12 text-heading-1">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

        {/* Dashboard Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-box-bg shadow-md p-6 rounded-2xl border border-box-border">
            <h2 className="text-xl font-semibold mb-2">Total Projects</h2>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-box-bg shadow-md p-6 rounded-2xl border border-box-border">
            <h2 className="text-xl font-semibold mb-2">Active Users</h2>
            <p className="text-3xl font-bold">4</p>
          </div>
          <div className="bg-box-bg shadow-md p-6 rounded-2xl border border-box-border">
            <h2 className="text-xl font-semibold mb-2">New Messages</h2>
            <p className="text-3xl font-bold">7</p>
          </div>
        </section>

        {/* Projects Table */}
        <section className="bg-box-bg p-6 rounded-2xl border border-box-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b border-box-border">
                <th className="py-2">Title</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-box-border">
                <td className="py-2">NextGen Portfolio</td>
                <td className="py-2">Feb 2024</td>
                <td className="py-2">Published</td>
                <td className="py-2 text-right">
                  <button className="text-blue-600 hover:underline mr-4">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              {/* Tambahkan row lainnya */}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;