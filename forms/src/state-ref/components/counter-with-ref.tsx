import { useRef, useState } from "react";

export function CounterWithRef() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref count: ", countRef.current);
  };

  return (
    <div className="flex justify-around w-full">
      <div>
        <h2 className="text-2xl">Ref Count: {countRef.current}</h2>
        <h2 className="text-2xl">State Count: {renderCount}</h2>
        <div className="flex flex-col py-2">
          <button
            onClick={increment}
            className="p-3 bg-amber-200 mb-2 rounded-full cursor-pointer"
          >
            Ref Incrementer
          </button>
          <button
            onClick={() => setRenderCount(renderCount + 1)}
            className="p-3 bg-emerald-300 rounded-full cursor-pointer"
          >
            Count Incrementer
          </button>
        </div>
      </div>
    </div>
  );
}
