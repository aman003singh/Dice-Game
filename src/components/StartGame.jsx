import styled from 'styled-components'
import { Button } from '../styled/Button'

const Startgame = ({toggle}) => {
  return (
    <div>
        <Container>
            
            <div><img src="./public/images/dices.png" alt="dices" /></div>
            <div className='content'> 
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
            </Container> 
    </div>
  )
}

export default Startgame

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: auto;
height: 100vh;
align-items: center;

.content h1{
    font-size: 96px;
    white-space: nowrap;
}

`

