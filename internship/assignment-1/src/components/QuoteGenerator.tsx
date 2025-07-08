// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import quotesData from "@/data/quotes.json";

// export default function QuoteGenerator() {
//   const [topic, setTopic] = useState("");
//   const [quotes, setQuotes] = useState<string[]>([]);
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setQuotes([]);

//     const normalizedTopic = topic.trim().toLowerCase();
//     const topicData = quotesData.find(
//       (item) => item.topic.toLowerCase() === normalizedTopic
//     );

//     if (topicData) {
//       setQuotes(topicData.quotes);
//     } else {
//       setError("No quotes found for this topic. Try 'motivation', 'life', or 'success'.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4 text-center">Quote Generator</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input
//           type="text"
//           placeholder="Enter a topic (e.g., motivation, life, success)"
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//           className="w-full"
//           aria-label="Topic input for quote generator"
//         />
//         <Button type="submit" className="w-full btn-primary">
//           Get Quotes
//         </Button>
//       </form>
//       {error && <p className="text-error mt-4">{error}</p>}
//       {quotes.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-2">Quotes:</h2>
//           <ul className="list-disc pl-5 space-y-2">
//             {quotes.map((quote, index) => (
//               <li key={index} className="text-base-content">
//                 {quote}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import quotesData from "@/data/quotes.json";

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setQuotes([]);

    const normalizedTopic = topic.trim().toLowerCase();
    const topicData = quotesData.find(
      (item) => item.topic.toLowerCase() === normalizedTopic
    );

    if (topicData) {
      setQuotes(topicData.quotes);
    } else {
      setError("No quotes found. Try 'inspiration', 'wisdom', or 'happiness'.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
      <div className="max-w-lg w-full mx-4 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl transform transition-all hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-teal-800 mb-6 tracking-tight">
          InspireMe Quotes
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter topic (e.g., inspiration, wisdom, happiness)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border-teal-300 focus:border-coral-500 focus:ring-coral-500 shadow-md rounded-lg"
            aria-label="Topic input for quote generator"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-coral-500 to-pink-500 text-white font-semibold rounded-lg hover:from-coral-600 hover:to-pink-600 transition-all duration-300"
          >
            Discover Quotes
          </Button>
        </form>
        {error && (
          <p className="text-coral-600 mt-4 text-center font-medium">{error}</p>
        )}
        {quotes.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-teal-800 mb-3">Quotes:</h2>
            <ul className="space-y-3">
              {quotes.map((quote, index) => (
                <li
                  key={index}
                  className="p-4 bg-teal-50 rounded-lg shadow-sm text-teal-900 hover:bg-teal-100 transition-colors"
                >
                  {quote}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}