import React from "react";
import { useState, useEffect } from "react";

const DeleteModal = ({ confirmDeleteId, setConfirmDeleteId, projects, handleDelete }) => {

  const target = projects.find(
    (x) => String(x._id ?? x.id) === String(confirmDeleteId)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setConfirmDeleteId(null)}
      />

      {/* Modal */}
      <div className="relative z-50 w-11/12 max-w-md rounded-md border border-white/8 bg-black p-6">

        <h3 className="orbitron text-lg text-white">
          Confirm Delete
        </h3>

        <p className="mt-3 text-sm text-zinc-300">
          Are you sure you want to delete{" "}
          <strong className="text-white">
            {target?.title ?? "this project"}
          </strong>
          ? This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={() => setConfirmDeleteId(null)}
            className="border border-white/8 px-4 py-2 text-zinc-200"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              await handleDelete(confirmDeleteId);
              setConfirmDeleteId(null);
            }}
            className="bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteModal;