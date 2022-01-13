import React, { useState } from "react";
import { ShareModal } from "lit-access-control-conditions-modal";

function App() {
  const [showingModal, setShowingModal] = useState(false);
  const showModal = () => {
    setShowingModal(true);
  };
  return (
    <div>
      <button onClick={showModal}>Show Modal</button>
      {showingModal ? (
        <ShareModal
          onClose={() => setShowingModal(false)}
          onAccessControlConditionsSelected={(acc) =>
            console.log("Access control conditions selected: ", acc)
          }
        />
      ) : null}
    </div>
  );
}

export default App;
