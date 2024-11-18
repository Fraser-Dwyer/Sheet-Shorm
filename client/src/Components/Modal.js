import "../Styles/Modal.css";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="backgroundModal">
      <div className="innerModal">
        <div className="collapseModal">
          <p className="modalTitle">Thank you and goodbye!</p>
          <button
            className="modalButton"
            onClick={() => setShowModal(!showModal)}
          >
            {showModal ? "-" : "+"}
          </button>
        </div>
        {showModal && (
          <p>
            Sheet Storm will be closing down on
            <b> November 29th 2024</b> at <b>23:59</b>.<br />
            <br />
            I'd like to thank all of you for using Sheet Storm over this last
            year. It's now time for the Wordle Awards of 2024, a massive
            congratulations to all of the winners:
            <br /> <br />
            <b>
              <u>Overall Winner</u>
            </b>
            <br />
            <span style={{ color: "#69A964", fontWeight: "bold" }}>
              Govin
            </span>{" "}
            - Claiming the top spot for points in 2024, winning for a total of
            15 weeks and surpassing a total score of 1000!
            <br /> <br />
            <b>
              <u>Most Dedicated</u>
            </b>{" "}
            <br />
            <span style={{ color: "#69A964", fontWeight: "bold" }}>Rachel</span>
            , <span style={{ color: "#69A964", fontWeight: "bold" }}>Luke</span>
            , and{" "}
            <span style={{ color: "#69A964", fontWeight: "bold" }}>Govin</span>{" "}
            who have each logged ~350 scores!
            <br /> <br />
            <b>
              <u>Best Week</u>
            </b>{" "}
            <br />
            <span style={{ color: "#69A964", fontWeight: "bold" }}>
              Fraser
            </span>{" "}
            - WC 04/03/24 got a weekly score of 30 which is just 2.71
            guesses/day!
            <br /> <br />
            <b>
              <u>Other</u>
            </b>{" "}
            <br />
            <span style={{ color: "#69A964", fontWeight: "bold" }}>
              Charle
            </span>{" "}
            for coming out triumphant alphabetically!
            <br />
            <br />
            I hope you all keep on Wordling away and may the words forever be in
            your favour,
            <br /> <br />
            Fraser xoxo
          </p>
        )}
      </div>
    </div>
  );
}
