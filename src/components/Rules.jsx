import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game?</h2>
      <ol>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted</li>
      </ol>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 20px;
max-width: 800px;
margin:0 auto;
margin-top: 10px;
border-radius: 10px;

h2{
    font-size: 24px;
}

ol{
    margin-top: 24px;

}
`;
