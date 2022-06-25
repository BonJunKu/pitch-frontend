import { Button } from "@sharedComponents/Button";
import { TopCont } from "@sharedComponents/TopCont";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoomList } from "./RoomList";

export const Main = () => {
  const list = [
    {
      id: "sdfsdf",
      name: "팀명",
      startEnd: "15-18",
      memberCount: 4,
      goal: "목표는 일찍 끝내는 것이다 자고싶다 졸리다",
      taskProgress: 35,
    },
    {
      id: "sdfsdf",
      name: "팀명",
      startEnd: "15-18",
      memberCount: 4,
      goal: "집에보내줘집에보내줘집에보내줘집에보내줘",
      taskProgress: 70,
    },
  ];

  return (
    <Container>
      <Scroll>
        <TopCont>
          포브스가 선정한 <br /> 세계 최강 타임어택 노동요
        </TopCont>
        <div>
          <Title>🔥 지금 활발한 방</Title>
          <RoomList list={list} />
        </div>
      </Scroll>
      <Link to="/room/create">
        <Button>팀 만들기</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Scroll = styled.div`
  overflow: auto;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 2rem 1rem;
`;