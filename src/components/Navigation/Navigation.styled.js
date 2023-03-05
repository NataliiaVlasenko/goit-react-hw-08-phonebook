import { NavLink } from 'react-router-dom';
import styled from "styled-components";


export const Nav = styled(NavLink)`
display: inline-block;
padding: 20px 0;
font-weight: 700;
color: var(--primaryTextColor);
font-size: 20px;
`;

  
//   .activeLink {
//     composes: link;
//     color: var(--accentColor);
//   }
  
//   .link:not(:last-child) {
//     margin-right: 30px;
//   }