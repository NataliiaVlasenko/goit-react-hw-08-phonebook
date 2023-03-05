import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
`;


export const Avatar = styled.img`
margin-right: 10px;
@media screen and (max-width: 500px) {
    display: none;
 }

`;
  
 export const Name = styled.span`
 font-weight: 700;
 margin-right: 20px;
 color: var(--secondaryTextColor);
 font-size: 18px;
 @media screen and (max-width: 500px) {
    display: none;
 }
 `;
