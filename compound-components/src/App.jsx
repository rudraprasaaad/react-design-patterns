import Modal from "./messy/modal";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Modal
        title="Delete Account"
        body="Are you sure you want to delete your account"
        primaryAction={<button>Delete</button>}
        secondaryAction={<button>Cancel</button>}
      />
    </div>
  );
}

export default App;
