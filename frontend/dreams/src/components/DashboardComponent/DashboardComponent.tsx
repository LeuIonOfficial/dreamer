import {Navigate} from "react-router-dom";
import styled from "styled-components";
import DreamCard from './DreamCard';
import {useEffect, useState} from "react";
import axios from "axios";
import '../../App.css';
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

    const DivCustomGradient=styled.div`
	background: linear-gradient(white, white), linear-gradient(160deg, rgb(132, 250, 213) 20%, rgb(235, 191, 255) 37%, rgb(246, 236, 133) 53%);
	border-radius: 8px;
  	border: double 1px transparent;
 	background-origin: border-box;
	background-clip: content-box, border-box;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
		&:hover{
    		background: linear-gradient(320deg, #F8ED84 23.88%, #F5E0FF 66.2%, #84FAD5 109.31%);
   			border-radius: 8px;
  		}
`
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
    const SpanText3=styled.span`
	font-family: Space Grotesk,serif;
	`
    const HeaderBar=styled.div`
	background: #fefdfd;
	border-radius: 5px;
	margin-left: 0;
	margin-right: 0;
	padding: 10px 0;
	position: sticky;
	top: 63px;
	z-index: 2;
	`
    return (
        <div>
            <div className='flex'>
                <div className="container mx-[15%]">
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
                                    <DivCustomGradient className="w-[180px] h-[36px] border-0 m-0 mr-[0.625rem] leading-none roundet-[39px]">
                                        <SpanText3>
                                            Random fulfill
                                        </SpanText3>
                                    </DivCustomGradient>
                                </div>
                            </div>
                        </HeaderBar>
                        <div className="block box-border overflow-y-scroll h-[100vh]">
                        <div className="block grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.map((product) => {
                                return (
                                    <DreamCard title={product.title} imagine={product.image}/>
                                );
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
