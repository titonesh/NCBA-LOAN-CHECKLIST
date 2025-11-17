import React, { useState } from "react";

interface DocumentItem {
  name: string;
  status: string;
  file: File | null;
  requestDeferral: boolean;
}

interface Category {
  title: string;
  documents: DocumentItem[];
}

const RequestChecklist = () => {
  const documentCategories: { title: string; documents: string[] }[] = [
    {
      title: "Contracts Documents Required",
      documents: [
        "Duly executed facility offer letter",
        "Board resolution of the borrower",
        "Acknowledgment by guarantor form",
        "Total cost of credit",
      ],
    },
    {
      title: "KYC Documents",
      documents: [
        "Certificate of incorporation",
        "Memorandum and articles of association",
        "Company PIN certificate",
        "CR12",
        "ID / Passport",
        "PIN certificate of the borrowers",
      ],
    },
    {
      title: "Facility Documents",
      documents: [
        "Directors personal guarantees and indemnities",
        "Borrowers to open mpesa till number linked to NCBA account",
      ],
    },
    {
      title: "Compliance Documents",
      documents: [
        "Business loan protector cover",
        "Business permits",
        "Borrowers to provide a current/valid tax compliance certificate",
      ],
    },
  ];

  const [checklist, setChecklist] = useState<Category[]>(
    documentCategories.map((category) => ({
      title: category.title,
      documents: category.documents.map((doc) => ({
        name: doc,
        status: "Pending", // greyed status
        file: null,
        requestDeferral: false,
      })),
    }))
  );

  const handleFileUpload = (catIdx: number, docIdx: number, file: File | null) => {
    const updated = [...checklist];
    updated[catIdx].documents[docIdx].file = file;
    setChecklist(updated);
  };

  const toggleDeferral = (catIdx: number, docIdx: number) => {
    const updated = [...checklist];
    const doc = updated[catIdx].documents[docIdx];
    doc.requestDeferral = !doc.requestDeferral;
    doc.status = doc.requestDeferral ? "Deferred" : "Pending";
    setChecklist(updated);
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">NCBA LOAN CHECKLIST</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-700 border-b border-gray-300">
            <tr>
              <th className="px-4 py-2 text-left border-r border-gray-300">Category</th>
              <th className="px-4 py-2 text-left border-r border-gray-300">Document</th>
              <th className="px-4 py-2 text-left border-r border-gray-300">Status</th>
              <th className="px-4 py-2 text-left border-r border-gray-300">Upload</th>
              <th className="px-4 py-2 text-left">Request Deferral</th>
            </tr>
          </thead>

          <tbody>
            {checklist.map((category, catIdx) =>
              category.documents.map((doc, docIdx) => (
                <tr key={docIdx} className="hover:bg-gray-50 border-b border-gray-300">
                  {docIdx === 0 && (
                    <td
                      rowSpan={category.documents.length}
                      className="px-4 py-2 border-r border-gray-300 font-semibold text-gray-700 bg-gray-50"
                    >
                      {category.title}
                    </td>
                  )}

                  <td className="px-4 py-2 border-r border-gray-300">{doc.name}</td>

                  <td className="px-4 py-2 border-r border-gray-300 text-gray-400 font-semibold">
                    {doc.status}
                  </td>

                  <td className="px-4 py-2 border-r border-gray-300">
                    <input
                      type="file"
                      onChange={(e) =>
                        handleFileUpload(
                          catIdx,
                          docIdx,
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                      className="border border-gray-300 rounded-md px-2 py-1 w-full"
                    />
                  </td>

                  <td className="px-4 py-2 border-gray-300">
                    <button
                      onClick={() => {
                        alert("Request deferral successful");
                        toggleDeferral(catIdx, docIdx);
                      }}
                      className={`px-3 py-1 rounded-md text-grey-200 ${
                        doc.requestDeferral ? "bg-red-600" : "bg-white-200"
                      }`}
                    >
                      {doc.requestDeferral ? "Deferred" : "Request Deferral"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestChecklist;


