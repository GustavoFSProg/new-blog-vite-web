import { useEffect, useState } from "react";
import api from "../api";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import moment from "moment";
import { AiTwotoneLike } from "react-icons/ai";

// import { makeStyles } from "@material-ui/core/styles";
import Carder from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import BButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  flex-direction: column;
  font-size: 24px;
  /* background: green; */

  @media screen and (max-width: 820px) {
    /* background: green; */
    width: 97%;
    /* padding-right: 20px; */
  }
`;

const Imagem = styled.img`
  width: 50%;
  height: 50%;
  /* height: 340px; */
  margin-bottom: 5px;
  /* background: yellow; */
  @media screen and (max-width: 920px) {
    width: 100%;
    height: 50%;
    margin-bottom: 3px;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-bottom: 60px;
    width: 79vw;
  }
`;

const AutorDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35rem;
  width: 100vw;

  @media screen and (max-width: 820px) {
    margin-left: -50px;
    margin-top: 20px;
    padding-bottom: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
  background: #394d3e;
  /* flex-direction: column; */
  font-size: 14px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  margin-right: 20px;
  transition: all ease 0.8s;

  &:hover {
    background: #31633e;
    color: yellow;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    width: 98%;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 14px;
    cursor: pointer;

    height: 45px;
  }
`;

const DateLikesAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: auto;
  flex-direction: row;
  margin-top: 20px;

  /* background: #333333; */
  background: #2a2b2a;

  @media screen and (max-width: 820px) {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 16px;
    width: 100%;
    padding-bottom: 20px;
    /* background: green; */
  }
`;

const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 310px;
  height: 200px;
  font-size: 18px;
  margin-left: 50px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    justify-content: center;
    /* flex-direction: column; */
    height: auto;
    width: 100%;
    /* background: green; */
    margin-left: 0px;
    padding-left: 50px;
  }
`;

const ContainerTexto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 30px;
  margin-top: 27px;
  line-height: 26px;
  font-size: 17px;
  margin-bottom: 6px;
  width: 50%;
  /* background: green; */
  font-family: Montserrat;

  @media screen and (max-width: 820px) {
    width: 105%;
    margin-left: 13px;
    /* padding-right: 20px; */
    font-size: 17px;
  }
`;

const ViewsContainer = styled.div`
  width: 15rem;
  height: 100px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    /* margin-top: -52px; */
  }
`;

const Autor = styled.div`
  text-indent: 50px;
  line-height: 25px;
  font-size: 16px;
`;

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function Profile() {
  const [posts, setPosts] = useState({});
  const [buttonopen, setButtonOpen] = useState(false);
  const [likeopen, setLikeOpen] = useState(false);

  const navigate = useNavigate();

  async function deletePost() {
    const id = sessionStorage.getItem("POST_ID");
    try {
      await api.delete(`/delete/${id}`);

      navigate("/");

      return alert(" Post Deletado!!");
    } catch (error) {
      return alert(error);
    }
  }

  function CardButton(id) {
    sessionStorage.setItem("POST_ID", id);
    return setButtonOpen(true);
  }

  function getDateWithoutTime(date) {
    return moment(date).format("DD-MM-YYYY");
  }

  async function getOnePost() {
    try {
      const id = sessionStorage.getItem("POST-ID");
      const { data } = await api.get(`/get-one-post/${id}`);

      setPosts(data);
    } catch (error) {
      return alert(error);
    }
  }

  async function handleLikes(id) {
    try {
      await api.put(`/update-likes/${id}`);

      setLikeOpen(true);

      // location.reload()

      navigate("/profile");
    } catch (error) {
      return alert(error);
    }
  }

  function SimpleCard(id) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const Id = sessionStorage.getItem("POST-ID");

    return (
      <Carder
        style={{
          display: "flex",
          position: "fixed",
          background: "#ffffcc",
          width: "350px",
          zIndex: "9999",
        }}
        className={classes.root}
      >
        <CardContent>
          <Typography
            style={{ fontSize: "21px", color: "#595959" }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deseja realmente apagar esse Post?
          </Typography>
          <Typography variant="h5" component="h2">
            <BButton
              style={{ fontSize: "20px", marginRight: "20px" }}
              size="small"
              onClick={() => deletePost()}
            >
              SIM
            </BButton>
            <BButton
              style={{ fontSize: "20px" }}
              size="small"
              onClick={() => setButtonOpen(false)}
            >
              NÃO
            </BButton>
          </Typography>
        </CardContent>
        <CardActions>
          <BButton
            style={{ color: "#e60000" }}
            size="small"
            onClick={() => setButtonOpen(false)}
          >
            FECHAR
          </BButton>
        </CardActions>
      </Carder>
    );
  }

  useEffect(() => {
    getOnePost();
  }, [posts]);

  return (
    <div>
      <Navbar />
      <Container>
        <br />
        {buttonopen === true ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SimpleCard />
          </div>
        ) : null}
        <TotalContainer>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "30px",
            }}
          >
            {posts.title}
          </p>

          <Imagem src={posts.image} alt="imagem" />
          <ContainerTexto>{posts.texto}</ContainerTexto>
          <DateLikesAllContainer>
            <LikesContainer>
              {likeopen === true ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                >
                  <button
                    style={{ background: "none", border: "none" }}
                    disabled
                  >
                    <AiTwotoneLike
                      style={{ color: "gray", marginRight: "3px" }}
                      fontSize="30px"
                    />
                  </button>
                </div>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => handleLikes(posts.id)}
                >
                  <AiTwotoneLike
                    style={{ color: "blue", marginRight: "3px" }}
                    fontSize="30px"
                  />
                </button>
              )}
              {posts.likes}
              <ViewsContainer>
                Views: <p style={{ marginLeft: "5px" }}>{posts.views}</p>
              </ViewsContainer>
            </LikesContainer>

            <AutorDateContainer>
              <Autor>Autor: {posts.autor}</Autor>
              <span
                style={{
                  fontSize: "16px",
                  marginTop: "4px",
                  marginLeft: "37px",
                }}
              >
                {getDateWithoutTime(posts.createdAt)}
              </span>
            </AutorDateContainer>
          </DateLikesAllContainer>
          <br />
        </TotalContainer>
        {/* // style= */}
        {/* {{ display: "flex", position: "relative", background: "green" }} */}
      </Container>
      {/* <Footer /> */}
      <br />

      {/* <div style={{ marginTop: "300px" }}> */}
      {/* </div> */}
    </div>
  );
}
