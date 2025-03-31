import styled from "styled-components";
import { toRem } from "../../utils";

const Wrapper = styled.aside`
  .mainBody {
    display: flex;
  }
  .drawer {
    @media (max-width: ${toRem(768)}) {
      display: none;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    padding-top: 2.75rem;
  }

  .listItem {
    display: block;
  }
  .listItemButton {
    min-height: 3.5rem;
    padding: 0 1rem;
    border-radius: 0 1.75rem 1.75rem 0;
    line-height: ${toRem(24)};
    letter-spacing: ${toRem(0.15)};
  }
  .listItemIcon {
    min-width: 0;
    justify-content: center;
    margin-right: 1.125rem;
  }
  .iconButtonBox {
    position: absolute;
    bottom: 0.625rem;
    left: 0.325rem;
    right: 0;
  }
  .iconButton {
    justify-content: center;
  }

  .bottomBar {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    padding: 0.625rem 0.625rem 0 0.625rem;
    @media (max-width: ${toRem(768)}) {
      display: flex;
    }
  }
  .iconButtonBottomBar {
    display: flex;
    gap: ${toRem(5)};
    min-height: 3.5rem;
    padding: 0 1.5rem 0 1rem;
    border-radius: 1.75rem;
    &:hover {
      border-radius: 1.75rem;
    }
  }
  .listItemIconBottom {
    justify-content: center;
  }
  .listItemTextBottom {
    @media (max-width: ${toRem(600)}) {
      display: none;
    }
  }

  .logo {
    position: absolute;
    bottom: ${toRem(60)};
    left: 0;
  }
`;

export default Wrapper;
