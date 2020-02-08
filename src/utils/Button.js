import styled from "styled-components"
import { styles } from "../utils"
const BannerButton = styled.button`
  display: block;
  color: white;
  background: ${styles.colors.mainGold};
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  /* ${styles.border({ color: `white` })}; */
  border: none;
  margin-top: 1rem;
  ${styles.transition({})};
  &:hover {
    background: #D4A536;
    color: white;
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
