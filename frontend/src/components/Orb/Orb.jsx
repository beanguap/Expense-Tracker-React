import styled from 'styled-components';

const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vh;
    margin-top: -35vh;
    background: linear-gradient(180deg, #F56692 0%, #f2994a 100%);
    filter: blur(400px);
`;

function Orb() {
    return <OrbStyled />;
}

export default Orb;
