import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.div`
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user-info{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 32px;
  gap: 16px;
}
`;
 export function Header() {
return <StyledHeader className="user-info">
    <img src="banner" />
    <section>

   <img src={`https://github.com/${config.github}.png`} />
    <div>

    <h2>{config.nome}</h2>
      <p>{config.job}</p>

    </div>
     
    </section>
     </StyledHeader>
}
