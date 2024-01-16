import styled from 'styled-components'

const NumberSelector = ({error ,selectedNumber, setselectedNumber}) => {

const numarray = [1,2,3,4,5,6];

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
        <div className='flex'>
        {numarray.map((value,i) => (
            <Box 
            isSelected = {value == selectedNumber}
            key={i}
             onClick={() => setselectedNumber(value)}>
                {value}</Box>

        ))}
        </div>

        <p>Select A Number</p>
        
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const Box = styled.div`


height: 72px;
width:72px;
border: 2px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.error{
  color: red;
  font-weight: bolder;
}

.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
`; 