import "./Logged.scss";
import DivContainer from "../LoggedComponents/DivContainer";
import HeaderLogin from "../LoggedComponents/HeaderLogin";
import DreamerzLogo from "../LoggedComponents/Logo";
import Search from "../LoggedComponents/Search";
import BalanceFrame from "../LoggedComponents/BalanceFrame";
import BalanceText from "../LoggedComponents/BalanceName";
import BalanceAmount from "../LoggedComponents/BalanceAmount";
import UserPhoto from "../LoggedComponents/UserPhoto";

function Logged() {
    return (
        <HeaderLogin>
            <DivContainer justify={"flex-start"}>
                <a href="#">
                    <DreamerzLogo></DreamerzLogo>
                </a>
            </DivContainer>
            <DivContainer justify={"center"}>
                <Search/>
            </DivContainer>
            <DivContainer justify={"flex-end"}>
                <BalanceFrame>
                    <BalanceText color={"#A8A6A6"} size={"13px"}>Balance</BalanceText>
                    <BalanceAmount color={"black"} size={"12px"}></BalanceAmount>
                </BalanceFrame>
                <UserPhoto>
                    {/*<Round role="button " href="#">*/}
                    {/*      <UserImg></UserImg>*/}
                    {/*</Round>*/}
                </UserPhoto>
                {/*<UserBalance>
                    <UserImg></UserImg>
                </UserBalance>*/}
            </DivContainer>
        </HeaderLogin>
    )
}

export default Logged;