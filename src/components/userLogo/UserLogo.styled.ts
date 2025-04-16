import styled from 'styled-components';
import { toRem } from '../../utils';

export const UserLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  min-width: ${toRem(40)};
  min-height: ${toRem(40)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: ${toRem(10)};
  margin-left: ${toRem(-10)};
  overflow: hidden;
  img {
    width: ${toRem(40)};
    height: ${toRem(40)};
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Username = styled.span<{ $isOpen: boolean }>`
  max-width: ${({ $isOpen }) => ($isOpen ? `${toRem(130)}` : '0')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    max-width 0.3s ease,
    opacity 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  @media (max-width: ${toRem(768)}) {
    max-width: calc(${toRem(0)} + (130 - 0) * ((100vw - ${toRem(380)}) / (768 - 380)));
  }
`;
