"use client";

import React, { useState, useEffect } from "react";

export function ResourcesTerminal() {
  const [commandText, setCommandText] = useState("");
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullCommand = "cat nexora_notice.txt";
  const fullOutput1 = "All Nexora Hackathon resources will be published 12 hours before the event for participants to view, download, and use.";
  const fullOutput2 = "Thank you.";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeCommand = () => {
      let i = 0;
      const interval = setInterval(() => {
        setCommandText(fullCommand.slice(0, i + 1));
        i++;
        if (i === fullCommand.length) {
          clearInterval(interval);
          timeoutId = setTimeout(typeOutput1, 400); // delay before outputting result
        }
      }, 80);
    };

    const typeOutput1 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setOutput1(fullOutput1.slice(0, i + 1));
        i++;
        if (i === fullOutput1.length) {
          clearInterval(interval);
          timeoutId = setTimeout(typeOutput2, 400); // delay before next paragraph
        }
      }, 30);
    };

    const typeOutput2 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setOutput2(fullOutput2.slice(0, i + 1));
        i++;
        if (i === fullOutput2.length) {
          clearInterval(interval);
        }
      }, 30);
    };

    // Initial delay before starting to type
    timeoutId = setTimeout(typeCommand, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Helper to colorize the 12 hours part if it's been typed out
  const renderOutput1 = () => {
    if (!output1.includes("12 hours")) return <span className="text-[#E6EDF3]">{output1}</span>;
    const parts = output1.split("12 hours");
    return (
      <span className="text-[#E6EDF3]">
        {parts[0]}
        <span className="text-[#FF7B72]">12 hours</span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="w-full bg-[#0d0d0d] rounded-xl overflow-hidden border border-[#222] shadow-2xl text-left">
      {/* Terminal Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[#222]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        <div className="ml-4 text-xs font-mono text-gray-500">~/nexora/resources/nexora_notice.txt</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-gray-300 min-h-[300px]">
        <div className="text-[#8E9CB0] mb-4">
          <span className="text-[#27C93F]">➜</span> <span className="text-[#A5D6FF]">{commandText.startsWith("cat") ? "cat" : commandText}</span>{commandText.length > 3 ? commandText.slice(3) : ""}
          {commandText.length < fullCommand.length && <span className="w-2.5 h-5 bg-[#B96CFF] animate-pulse inline-block align-middle ml-1"></span>}
        </div>
        
        {commandText.length === fullCommand.length && (
          <>
            <p className="leading-loose max-w-2xl min-h-[64px]">
              {renderOutput1()}
              {output1.length < fullOutput1.length && <span className="w-2.5 h-5 bg-[#B96CFF] animate-pulse inline-block align-middle ml-1"></span>}
            </p>
            
            {output1.length === fullOutput1.length && (
              <p className="mt-6 text-[#8E9CB0] min-h-[28px]">
                {output2}
                {output2.length < fullOutput2.length && <span className="w-2.5 h-5 bg-[#B96CFF] animate-pulse inline-block align-middle ml-1"></span>}
              </p>
            )}

            {output2.length === fullOutput2.length && (
              <div className="mt-8 flex items-center gap-2">
                <span className="w-2.5 h-5 bg-[#B96CFF] animate-pulse inline-block"></span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
