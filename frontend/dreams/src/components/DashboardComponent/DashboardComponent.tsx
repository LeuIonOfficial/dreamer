import styled from "styled-components";
import DreamCard from './DreamCard';
import {useEffect, useState} from "react";
import axios from "axios";
import '../../App.css';
import Button from "../Authorization/Button";
import React from "react";
export const DashboardComponent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://fakestoreapi.com/products',
            );
            setProducts(result.data);
        };
        fetchData();
    }, []);

    const SpanText=styled.span`
	font-family: Space Grotesk,serif;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	color: #828282;
		&:hover{
			text-decoration: underline;
		}
	`
    const SpanText2=styled.span`		
	font-family: Space Grotesk,serif;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #828282;
		&:hover{
			text-decoration: underline;
		}
	`
    const HeaderBar=styled.div`
	background: #fefdfd;
	border-radius: 5px;
	margin-left: 0;
	margin-right: 0;
	padding: 10px 0;
	position: sticky;
	top: 0;
	z-index: 2;
	`
    const BlockDream = styled.div`
      @media only screen and (max-width: 800px){
        height: 600px;
        position: relative;
        padding: 10px;
        flex-direction: column;
      }
    `
    const DreamCardBlocks = styled.div`
      &::-webkit-scrollbar{
        border-radius: 0;
        height: 0.5rem;
        width: 0.2rem;
    `
    return (
        <>
            <div>
                 <BlockDream className="flex-[0_0_auto] max-w-[80%] max-[995px]:max-w-full">
                    <div className="mb-[10px] text-center">
                        <HeaderBar>
                            <div className="grid grid-cols-6">
                                <div className="col-start-3 col-end-5 flex items-center justify-center">
                                    <SpanText className="cursor-pointer">
                                        Most Popular
                                    </SpanText>
                                    <SpanText2 className="pl-[20px] cursor-pointer">
                                        Less popular
                                    </SpanText2>
                                </div>
                                <div className="col-end-7 col-span-2 flex justify-end">
                                    <Button className="w-[180px] h-[36px] border-0 m-0 mr-[0.625rem] leading-none rounded-[39px]">
                                            Random fulfill
                                    </Button>
                                </div>
                            </div>
                        </HeaderBar>
                        <DreamCardBlocks className="block box-border overflow-scroll h-[86vh]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {products.map(({title, image}) => {
                                return (
                                    <DreamCard image={image} title={title} />
                                );
                            })}
                        </div>
                        </DreamCardBlocks>
                    </div>
                </BlockDream>
            </div>
        </>
    )
}
