import MouseTracker from "./with-pattern/mouse-tracker";

function App() {
  return (
    <div className="flex flex-col items-center">
      <MouseTracker
        render={(pos) => (
          <p>
            Car is at pos ({pos.x}, {pos.y})
          </p>
        )}
      />
      <MouseTracker
        render={(pos) => (
          <p>
            Bike is at pos ({pos.x}, {pos.y})
          </p>
        )}
      />
    </div>
  );
}

export default App;
