import "../styles/Spinner.css";
import styled from "@emotion/styled";

const Contenedor = styled.div`
    margin: 100px auto;
`;

const Spinner = () => {
    return (
        <Contenedor className='sk-chase'>
            <div className='sk-chase-dot'></div>
            <div className='sk-chase-dot'></div>
            <div className='sk-chase-dot'></div>
            <div className='sk-chase-dot'></div>
            <div className='sk-chase-dot'></div>
            <div className='sk-chase-dot'></div>
        </Contenedor>
    );
};

export default Spinner;
