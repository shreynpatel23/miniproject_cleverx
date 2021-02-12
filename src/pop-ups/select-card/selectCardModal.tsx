import React from "react";
import Close from "../../assets/svg/close";
import Button from "../../shared/button/button";
import "../popUpStyle.css";
import "../../shared/inputStyles.css";
import "./selectCardModal.css";
import ArrowDown from "../../assets/svg/arrowDown";
import Tick from "../../assets/svg/tickSvg";
import VisaImage from "../../assets/images/visa.png";
function SelectCardModal({ onCloseModal, onPaymentDone, onGoingBack }: any) {
  // this is a constant to render the number of cards in UI.
  const listOfCards = [
    { cardNumber: "2345" },
    { cardNumber: "7654" },
    { cardNumber: "3456" },
  ];
  const [selectedCard, setSelectedCard] = React.useState(listOfCards[0]);
  return (
    <div className="overlay">
      <div className="popUpContent">
        <div className="modal_header">
          <div className="back_arrow_wrapper">
            <ArrowDown
              classes="back_arrow_svg"
              width="15"
              height="10"
              onClick={() => onGoingBack()}
            />
          </div>
          <p className="modal_header_text">Choose Card</p>
          <div className="close_modal">
            <Close
              classes="close_svg"
              width="15"
              height="15"
              onClick={() => onCloseModal()}
            />
          </div>
        </div>
        <div className="modal_body">
          <div className="card_overlay">
            {listOfCards.map((card: any) => {
              return (
                <div className="form_field_wrapper" key={card.cardNumber}>
                  <div
                    className={`${
                      card.cardNumber === selectedCard.cardNumber
                        ? "selected_card"
                        : "card_wrapper"
                    }`}
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className="card_items_spacing">
                      <Tick
                        width="17"
                        height="17"
                        color={
                          card.cardNumber === selectedCard.cardNumber
                            ? "#31b975"
                            : "#fff"
                        }
                      />
                    </div>
                    <img
                      src={VisaImage}
                      alt="visa"
                      width="50px"
                      style={{ padding: "2px 5px" }}
                    />
                    <p className="card_number_text">
                      Visa credit card ending with{" "}
                      <span className="span">{card.cardNumber}</span>
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="form_field_wrapper">
              <div className="add_card_wrapper">
                <p className="add_card_text">Add Card</p>
              </div>
            </div>
          </div>
          <div className="form_field_wrapper">
            <Button button_text="Pay" onClick={() => onPaymentDone()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCardModal;
