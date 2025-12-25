import { ControlledFeedbackForm } from "./controlled/controlled-feedback-form";
// import FeedbackForm from "./messy/feedback-form";
// import { AutoFocusInput } from "./state-ref/components/auto-focus-inpu";
// import { Counter } from "./state-ref/components/counter";
// import { CounterWithRef } from "./state-ref/components/counter-with-ref";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-2 h-screen flex flex-col justify-center items-center">
        {/* <Counter />
        <AutoFocusInput />
        <CounterWithRef /> */}

        <ControlledFeedbackForm />
      </div>
    </>
  );
}

export default App;
