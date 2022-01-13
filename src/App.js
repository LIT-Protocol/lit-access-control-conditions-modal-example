import React, { useState } from "react";
import { ShareModal } from "lit-access-control-conditions-modal";

function App() {
  const [showingModal, setShowingModal] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState(null);
  const showModal = () => {
    setShowingModal(true);
  };
  return (
    <div>
      <button onClick={showModal}>Show Modal</button>
      {showingModal ? (
        <ShareModal
          onClose={() => setShowingModal(false)}
          onAccessControlConditionsSelected={(acc) => {
            console.log("Access control conditions selected: ", acc);
            setSelectedConditions(acc);
            setShowingModal(false);
          }}
          showStep={"ableToAccess"}
        />
      ) : null}

      {selectedConditions ? (
        <>
          <h3>Selected conditions: </h3>
          <pre>{JSON.stringify(selectedConditions, null, 2)}</pre>
        </>
      ) : null}
    </div>
  );
}

export default App;
