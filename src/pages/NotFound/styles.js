import styled from "styled-components";

export const CenterBlockContent = styled.section`
    display: flex;
    flex-direction: column;
    @media (max-height: 1280px) {
        max-height: 90%;
    }
`;

export const NotFoundWrapper = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 100px 20px 40px;
`;

export const NotFoundBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 100px;
`;

export const NotFoundTitle = styled.h1`
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    color: black;
`;

export const NotFoundText = styled.p`
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: black;
`;

export const SmileWrapper = styled.div`
    display: flex;
`;


export const NotFoundDescription = styled.p`
    width: 282px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: black;
`;

export const NotFoundButton = styled.button`
    width: 278px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: white;
    background-color: rgba(88, 14, 162);
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin: 30px;
    :hover {
        background-color: rgb(64 8 120);
    }
    :active {
        background-color: rgb(43 10 77);
    }
`;
