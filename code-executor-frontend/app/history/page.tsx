'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface ExecutionHistory {
  id: number;
  user: {
    name: string;
  };
  code: string;
  language: string;
  output: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<ExecutionHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const { data } = await axios.get("http://localhost:3001/execution-history/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHistory(data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const  nextEntry =()=>{
    if(currentIndex <  history.length -1){
        setCurrentIndex((prev) =>  prev+1)
    }
  }

  const  prevEntry=()=>{
    if (currentIndex > 0){
        setCurrentIndex((prev) => prev-1)
    }
  }

  // Get the user's name from the first history entry (since it's the same for all)
  const username = history.length > 0 ? history[0].user.name : "";

  return (
    <div className="min-h-screen bg-gray-200 text-black flex flex-col items-center p-3 w-full">
      {username && <h1 className="text-2xl font-semibold mb-6">Execution History of {username}</h1>}

      {loading && <p className="text-gray-400">Loading history...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && history.length === 0 && (
        <p className="text-gray-400">No execution history found.</p>
      )}

      {history.length > 0 && (
        <>  
    <div className="w-full max-w-5xl bg-white rounded shadow-lg text-black  border-b-neutral-950 mb-5 flex flex-row items-start justify-start">

        
                  <div className="flex justify-start mb-4 gap-3 py-3 px-3 top-2 relative">
                  <button 
                    className={` cursor-pointer px-6 py-2 rounded  flex flex-row items-center justify-center  ${currentIndex === 0 ? 'bg-blue-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-500'}`}
                    onClick={prevEntry}
                    disabled={currentIndex === 0}
                  >
                      <GrPrevious 
                      className="font-bold text-white text-1xl"
                      />
                    Prev
                  </button>
                  <button 
                    className={` cursor-pointer px-6 py-2 rounded  flex flex-row items-center justify-center ${currentIndex === history.length - 1 ? 'bg-blue-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-500'}`}
                    onClick={nextEntry}
                    disabled={currentIndex === history.length - 1}
                  >
                      Next
                      <GrNext 
                      className="font-bold text-white text-1xl"
                      />
                  </button>
                </div>

        </div>
            
        <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg text-black  border-b-neutral-950">


          {/* Table Layout for Execution History */}
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
  <thead>
    <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-black uppercase text-sm font-semibold">
      <th className="p-4 border-l border-r border-gray-400">Execution Time</th>
      <th className="p-4 border-l border-r border-gray-400">Language</th>
      <th className="p-4 border-l border-r border-gray-400">Code</th>
      <th className="p-4 border-l border-r border-gray-400">Output</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-300">
    <tr className="text-center">
      <td className="p-4 border-l border-r border-gray-400">
        {new Date(history[currentIndex].createdAt).toLocaleString()}
      </td>
      <td className="p-4 border-l border-r border-gray-400 text-yellow-500 font-semibold">
        {history[currentIndex].language}
      </td>
      <td className="p-4 border-l border-r border-gray-400">
        <pre className="bg-gray-50 p-3 rounded-md text-sm max-w-[1950px] whitespace-pre-wrap break-words overflow-x-auto">
          {history[currentIndex].code}
        </pre>
      </td>
      <td className="p-4 border-l border-r border-gray-400">
        <pre className="bg-gray-50 p-3 rounded-md text-sm max-w-[1950px] whitespace-pre-wrap break-words overflow-x-auto">
          {history[currentIndex].output}
        </pre>
      </td>
    </tr>
  </tbody>
</table>



        </div>
        </>
      )}
    </div>
  );
}
