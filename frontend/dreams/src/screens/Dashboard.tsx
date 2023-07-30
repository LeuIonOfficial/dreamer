import {Navigate} from "react-router-dom";
import {ProfileHeader} from "../components/ProfileHeader/ProfileHeader";
import {DashboardComponent} from "../components/DashboardComponent/DashboardComponent";
import RightSideBlock from "../components/rightSideBar/RightSideBlock";
import styled from "styled-components";

const DashboardTest = styled.div`
  height: 93.5vh;
  margin-right: 1px;
  padding-bottom: 33px;
  overflow: scroll;
  &::-webkit-scrollbar{
    border-radius: 20px;
    height: 0.5rem;
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb{
    background: #b9b9b9;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track{
    border-radius: 20px;
  }
`
export const Dashboard = () => {

    return (
        <DashboardTest className="flex m-0">
<div className="w-[16%]"></div>
            <DashboardComponent />
            <RightSideBlock />
        </DashboardTest>
    )
}
