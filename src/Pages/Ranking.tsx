import {} from "@mui/material";
import ContainerFlex from "../Components/ContainerFlex";
import Carta from "../Components/Carta";
import CartaTresCoracao from "../Assets/Images/images.png";
import TabelaSimples from "../Components/TabelaSimples";

function Ranking() {
  return (
    <>
      <ContainerFlex>
        <TabelaSimples />
        {/* <Carta valor={10} imagem={CartaTresCoracao}/> */}
      </ContainerFlex>
    </>
  );
}

export default Ranking;
