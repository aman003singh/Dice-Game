import styled from "styled-components";

const RoleDice = ({ roleDice , currentDice }) => {
  

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .dice {
    cursor: pointer;
  }
`;
