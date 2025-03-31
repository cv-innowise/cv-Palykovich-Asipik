import styled from "styled-components";
import { toRem } from "../utils";


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${toRem(40)};

  .title {
    line-height: ${toRem(24)};
    letter-spacing: ${toRem(0.15)};
  }

  .selectContainer {
    display: flex;
    justify-content: center;
  }
`;
export default Wrapper;
