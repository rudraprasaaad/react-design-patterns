import { useEffect, useRef } from "react";

export function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      className="border rounded-2xl p-2 my-3"
      ref={inputRef}
      placeholder="Type Here...."
    />
  );
}
