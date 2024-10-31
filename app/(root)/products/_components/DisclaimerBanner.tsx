
"use client"
import { useState } from "react";
import { X } from "lucide-react";
const DisclaimerBanner =()=> {
    const [isVisible, setIsVisible] = useState(true);
  
    if (!isVisible) return null;
  
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-4 flex justify-between items-center">
        <p className="text-yellow-800">
          For testing purposes, please use the following test card to complete
          payment: Card Number: <strong>4242 4242 4242 4242</strong>, Expiry Date:
          any future date, CVC: any 3-digit code.
        </p>
        {/* <button onClick={() => setIsVisible(false)} aria-label="Close">
          <X className="w-5 h-5 text-yellow-800" />
        </button> */}
      </div>
    );
  }
  export default DisclaimerBanner