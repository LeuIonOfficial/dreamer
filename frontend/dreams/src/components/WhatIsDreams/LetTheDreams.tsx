import Carusela from "./Carusela";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const LetDreamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 830px;
  padding: 64px;
  font-family: "Space Grotesk", sans-serif;

  @media screen and (max-width: 600px) {
    height: auto;
    padding: 32px;
  }

`;

const LetDreamsHeading = styled.h1`
  color: #333;
  font-size: 54px;
  text-align: center;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    margin-top: 100px;
  }
`;

const SVGContainer = styled.svg`
  position: absolute;
  top: 181px;

  @media screen and (max-width: 768px) {
    top: 291px;
  }
`;

const CaruselaContainer = styled.div`
  margin-top: 200px;

  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
`;

const Button = styled.button`
  border-radius: 43px;
  height: 72px;
  width: 350px;
  position: absolute;
  top: 573px;
  left: 54%;
  margin-top: 100px;
  transform: translate(-60%);
  background: linear-gradient(297.06deg, #f8ed84 23.88%, #f5e0ff 66.2%, #84fad5 109.31%);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 140px;
    margin-left: 35px;
    
  }
  
  &:hover{
    font-size: 21px;
  }

`;

const LetDreamerz: React.FC = () => {

    const navigate = useNavigate();

    const redirectionareSignUp = ()=> {
        navigate("/signup")
    }
    return (
        <LetDreamsContainer>
            <LetDreamsHeading>Let the Dreams be your Wings</LetDreamsHeading>

            <SVGContainer
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.6638 22.5404C17.3651 22.5404 17.1304 22.4124 16.9595 22.1564C16.8314 21.9004 16.7459 21.751 16.7032 21.7084C16.2342 22.1777 15.5733 22.775 14.7205 23.5004C13.9103 24.2257 12.439 25.1857 10.3065 26.3804C8.17398 27.575 6.27573 28.1724 4.61173 28.1724C1.8384 28.1724 0.45099 27.1057 0.4495 24.9724C0.447892 22.6684 1.91781 19.6817 4.85925 16.0124C7.80068 12.343 11.4464 9.07905 15.7964 6.22038C20.1891 3.31905 24.1134 1.86838 27.5694 1.86838C29.5747 1.86838 31.0898 2.46571 32.1146 3.66038C33.1821 4.85505 33.7165 6.41238 33.7179 8.33238C33.7192 10.2097 32.8891 12.919 31.2276 16.4604C37.8801 11.511 42.5077 9.03638 45.1104 9.03638C45.6224 9.03638 46.0491 9.18571 46.3907 9.48438C46.7322 9.78305 46.9032 10.1884 46.9035 10.7004C46.9041 11.5537 45.1567 14.3057 41.6613 18.9564C38.2085 23.607 34.7346 28.471 31.2395 33.5484C27.7444 38.6257 25.9975 42.1244 25.9988 44.0444C25.9996 45.239 26.6614 45.8364 27.9841 45.8364C29.9894 45.8364 32.8255 44.0017 36.4922 40.3324C37.0465 39.7777 37.5156 39.5004 37.8996 39.5004C38.1556 39.5004 38.2838 39.6924 38.284 40.0764C38.2843 40.4177 37.6022 41.207 36.2377 42.4444C34.8732 43.639 33.1674 44.8124 31.1202 45.9644C29.1156 47.1164 27.3667 47.6924 25.8734 47.6924C23.868 47.6924 22.8648 46.8604 22.8636 45.1964C22.8624 43.4897 23.9059 40.887 25.9942 37.3884C28.125 33.847 30.4693 30.4124 33.027 27.0844C39.8049 18.3377 43.1933 13.239 43.1923 11.7884C43.1921 11.5324 43.0427 11.4044 42.744 11.4044C40.312 11.4044 36.175 13.7084 30.3329 18.3164C27.052 24.759 22.5767 31.4577 16.9069 38.4124C11.2797 45.367 7.48483 48.8444 5.52217 48.8444C4.4555 48.8444 3.92185 48.3964 3.92123 47.5004C3.91929 44.727 6.30575 40.6097 11.0806 35.1484C15.8554 29.6444 21.3558 24.375 27.5816 19.3404C29.925 14.647 31.0957 10.9777 31.0939 8.33238C31.0916 5.08971 29.3625 3.46838 25.9065 3.46838C23.2612 3.46838 20.0621 4.76971 16.3092 7.37238C12.599 9.93238 9.42237 12.855 6.77933 16.1404C4.13629 19.4257 2.81545 22.0284 2.81679 23.9484C2.81792 25.5697 3.88515 26.3804 6.01848 26.3804C7.46915 26.3804 9.53787 25.5057 12.2247 23.7564C14.9114 22.007 16.4466 20.791 16.8301 20.1084C18.6625 16.8657 19.7066 15.0737 19.9624 14.7324C20.8574 13.3244 21.5822 12.6204 22.1369 12.6204C22.3502 12.6204 22.4783 12.7697 22.5212 13.0684C22.5641 13.367 22.5216 13.6657 22.3938 13.9644C22.3087 14.2204 22.1382 14.5617 21.8825 14.9884C21.6268 15.3724 21.3924 15.735 21.1793 16.0764C20.9662 16.375 20.6678 16.7804 20.2841 17.2924C19.9432 17.8044 19.6235 18.2524 19.3251 18.6364C19.0693 19.0204 18.8563 19.383 18.6858 19.7244C18.4302 20.2364 18.3026 20.8337 18.3031 21.5164C18.3036 22.199 18.0905 22.5404 17.6638 22.5404ZM6.35309 47.3084C7.50506 47.2657 10.3617 44.407 14.9231 38.7324C19.5271 33.015 23.3631 27.2977 26.4311 21.5804C21.0584 26.1884 16.3257 30.967 12.2331 35.9164C8.1406 40.8657 6.09514 44.5137 6.09678 46.8604C6.09699 47.159 6.18243 47.3084 6.35309 47.3084ZM60.8843 36.1724C61.1828 35.959 61.4601 35.8524 61.7161 35.8524C61.9721 35.8524 62.1002 36.0017 62.1004 36.3004L62.1005 36.4284C57.6657 40.0977 53.977 42.8497 51.0343 44.6844C48.0915 46.519 45.4255 47.4364 43.0362 47.4364C41.1162 47.4364 40.1555 46.4977 40.1542 44.6204C40.1523 41.847 41.5583 39.0097 44.3723 36.1084C47.1862 33.1644 49.5532 31.6924 51.4732 31.6924C52.5399 31.6924 53.0736 32.2897 53.0744 33.4844C52.8627 35.831 49.4943 38.9884 42.9691 42.9564L42.9695 43.5964C42.9705 45.0044 43.6963 45.7084 45.147 45.7084C46.6403 45.7084 48.24 45.2177 49.946 44.2364C53.2726 42.2737 56.3857 40.0337 59.2853 37.5164L60.8843 36.1724ZM49.8106 33.6764C48.8719 33.6764 47.6565 34.4657 46.1642 36.0444C44.7147 37.623 43.7346 39.415 43.224 41.4204C45.2711 40.183 46.9982 38.8817 48.4053 37.5164C49.8123 36.1084 50.5156 35.127 50.5152 34.5724C50.5148 33.975 50.2799 33.6764 49.8106 33.6764ZM76.3618 38.3484L75.9764 36.3004C75.9762 35.959 76.0613 35.6604 76.2318 35.4044C76.4023 35.1484 76.6795 35.0204 77.0635 35.0204C77.4475 35.0204 77.7464 35.319 77.9601 35.9164C78.2165 36.471 78.3449 37.047 78.3453 37.6444C78.3469 39.8204 77.1538 42.0604 74.766 44.3644C72.3783 46.6684 69.9045 47.8204 67.3445 47.8204C66.7471 47.8204 66.2777 47.6284 65.936 47.2444C65.5945 46.903 65.4235 46.455 65.4231 45.9004C65.4227 45.303 65.6994 44.4497 66.2533 43.3404C66.8499 42.231 67.1481 41.5484 67.1479 41.2924C67.1477 41.0364 67.0836 40.9084 66.9556 40.9084C66.8276 40.9084 66.721 40.951 66.6357 41.0364C62.3716 44.6204 59.2368 46.4124 57.2315 46.4124C56.0368 46.4124 55.4391 45.9004 55.4384 44.8764C55.4373 43.255 56.6304 40.9937 59.0177 38.0924C61.4476 35.1484 63.1746 33.6764 64.1986 33.6764C64.8386 33.6764 65.1587 33.8044 65.1588 34.0604C65.159 34.2737 64.754 34.7644 63.9439 35.5324C63.1764 36.3004 61.9827 37.687 60.3628 39.6924C58.7855 41.655 57.9971 43.0844 57.9978 43.9804C57.9982 44.535 58.425 44.8124 59.2784 44.8124C60.1317 44.8124 62.0082 43.6604 64.9079 41.3564C67.8076 39.0097 70.1528 36.8764 71.9435 34.9564C72.6257 34.2737 73.2014 33.9324 73.6708 33.9324C74.1828 33.9324 74.4389 34.103 74.4391 34.4444C74.4393 34.743 74.3329 35.0417 74.1197 35.3404C73.9493 35.639 73.3098 36.4284 72.2014 37.7084C69.4304 41.079 68.0456 43.7244 68.0469 45.6444C68.0473 46.1564 68.2395 46.4124 68.6235 46.4124C70.2021 46.4124 71.8869 45.5804 73.6777 43.9164C75.4685 42.2097 76.3632 40.3537 76.3618 38.3484ZM123.677 45.7724C124.829 45.7724 126.471 44.7697 128.603 42.7644C130.735 40.759 133.058 38.1137 135.573 34.8284C134.294 35.0417 133.099 35.1484 131.99 35.1484C129.216 35.1484 127.168 34.5084 125.844 33.2284C124.521 31.9057 123.858 30.071 123.856 27.7244C123.855 25.335 124.621 22.519 126.155 19.2764C127.731 16.0337 129.67 13.0044 131.972 10.1884C134.317 7.37238 137.003 5.00438 140.031 3.08438C143.059 1.12171 145.896 0.140381 148.541 0.140381C151.443 0.140381 152.894 1.67638 152.896 4.74838C152.899 7.82038 151.685 11.8737 149.257 16.9084C146.828 21.943 143.803 26.935 140.179 31.8844C142.781 30.8604 145.511 29.431 148.368 27.5964C151.226 25.7617 153.102 24.6097 153.998 24.1404C154.936 23.671 155.64 23.4364 156.109 23.4364C156.579 23.4364 156.942 23.5644 157.198 23.8204C157.497 24.0337 157.646 24.2897 157.646 24.5884C157.647 25.1857 156.943 25.6124 155.535 25.8684C154.17 26.1244 151.568 27.3617 147.73 29.5804C143.891 31.799 140.842 33.271 138.581 33.9964C135.512 38.0497 132.549 41.335 129.692 43.8524C126.877 46.3697 124.574 47.6284 122.782 47.6284C120.308 47.6284 119.069 45.8577 119.067 42.3164C119.066 41.335 119.172 39.927 119.384 38.0924C119.596 36.215 119.702 34.999 119.701 34.4444C119.699 31.1164 118.695 29.4524 116.69 29.4524C115.964 29.4524 115.196 29.5804 114.386 29.8364C111.914 33.5057 109.932 36.3644 108.44 38.4124C106.948 40.4604 105.179 42.7004 103.133 45.1324C99.2105 49.783 95.6494 52.1084 92.4494 52.1084C91.1694 52.1084 90.5291 51.639 90.5285 50.7004C90.5271 48.7377 92.8715 45.4524 97.5616 40.8444C102.252 36.1937 106.836 32.5884 111.314 30.0284C113.999 25.9324 116.109 22.7537 117.643 20.4924C119.178 18.1884 121.139 15.4577 123.526 12.3004C125.913 9.14305 128.066 6.58305 129.984 4.62038C132.841 1.76171 135.272 0.332383 137.277 0.332383C138.088 0.332383 138.493 0.567049 138.494 1.03638C138.494 1.33505 138.366 1.54838 138.11 1.67638C137.513 2.01771 137.044 2.27371 136.703 2.44438C133.291 4.70571 129.624 8.41771 125.703 13.5804C123.188 16.951 119.799 21.7937 115.537 28.1084C116.347 27.8524 117.136 27.7244 117.904 27.7244C118.715 27.7244 119.419 27.895 120.017 28.2364C120.657 28.5777 121.105 29.0684 121.362 29.7084C121.789 30.775 122.003 32.0337 122.004 33.4844L121.179 42.1884C121.18 44.5777 122.013 45.7724 123.677 45.7724ZM135.188 33.0364C135.785 33.0364 136.404 32.9724 137.044 32.8444C140.752 27.8097 143.928 22.6684 146.569 17.4204C149.254 12.1724 150.595 8.22571 150.593 5.58038C150.591 2.89238 149.481 1.54838 147.262 1.54838C144.574 1.54838 141.61 2.93505 138.369 5.70838C135.171 8.48171 132.485 11.8097 130.312 15.6924C128.139 19.5324 127.053 22.967 127.055 25.9964C127.058 30.6897 129.769 33.0364 135.188 33.0364ZM94.4322 50.3164C95.9682 50.3164 97.9511 48.8017 100.381 45.7724C102.811 42.7004 106.072 38.0497 110.163 31.8204C106.41 34.039 102.658 37.1324 98.9058 41.1004C95.1538 45.0257 93.2784 47.7777 93.2795 49.3564C93.28 49.9964 93.6642 50.3164 94.4322 50.3164ZM162.205 36.1724C162.504 35.959 162.781 35.8524 163.037 35.8524C163.293 35.8524 163.421 36.0017 163.421 36.3004L163.421 36.4284C160.223 38.9884 157.068 41.399 153.955 43.6604C150.841 45.879 148.56 46.9884 147.109 46.9884C146.042 46.9884 145.508 46.4124 145.508 45.2604C145.507 44.1084 146.018 42.9564 147.041 41.8044C148.064 40.6524 149.066 39.6497 150.047 38.7964C151.071 37.943 151.582 37.3884 151.582 37.1324C151.582 36.8337 151.411 36.5137 151.069 36.1724C150.77 35.7884 150.514 35.5324 150.301 35.4044C149.576 36.1297 147.998 37.4524 145.568 39.3724L145.311 38.4124C147.997 36.279 149.554 34.8497 149.98 34.1244L149.979 33.5484C149.979 32.4817 150.085 31.7564 150.298 31.3724C150.511 30.9884 151.023 30.455 151.833 29.7724C152.643 29.0897 153.197 28.7484 153.496 28.7484C153.795 28.7484 154.051 28.855 154.264 29.0684C154.521 29.2817 154.649 29.495 154.649 29.7084C154.649 29.9217 154.564 30.1777 154.393 30.4764C154.266 30.7324 154.116 30.967 153.946 31.1804C153.818 31.351 153.626 31.5857 153.37 31.8844C153.115 32.1404 152.944 32.3324 152.859 32.4604C152.816 32.5457 152.752 32.7164 152.667 32.9724C152.625 33.2284 152.497 33.4417 152.284 33.6124C152.07 33.783 151.964 33.9964 151.964 34.2524C151.964 34.5084 152.135 35.0844 152.477 35.9804C152.819 36.8337 152.99 37.4737 152.991 37.9004C152.991 38.2844 152.202 39.2444 150.625 40.7804C149.047 42.2737 148.258 43.4897 148.259 44.4284C148.259 44.9404 148.494 45.1964 148.964 45.1964C149.561 45.1964 150.67 44.663 152.291 43.5964L153.058 43.0844C155.83 41.1644 158.431 39.223 160.862 37.2604L162.205 36.1724ZM178.634 36.1724C178.933 35.959 179.21 35.8524 179.466 35.8524C179.722 35.8524 179.85 36.0017 179.85 36.3004L179.85 36.4284C175.416 40.0977 171.727 42.8497 168.784 44.6844C165.842 46.519 163.176 47.4364 160.786 47.4364C158.866 47.4364 157.906 46.4977 157.904 44.6204C157.902 41.847 159.308 39.0097 162.122 36.1084C164.936 33.1644 167.303 31.6924 169.223 31.6924C170.29 31.6924 170.824 32.2897 170.824 33.4844C170.613 35.831 167.244 38.9884 160.719 42.9564L160.72 43.5964C160.72 45.0044 161.446 45.7084 162.897 45.7084C164.39 45.7084 165.99 45.2177 167.696 44.2364C171.023 42.2737 174.136 40.0337 177.035 37.5164L178.634 36.1724ZM167.561 33.6764C166.622 33.6764 165.406 34.4657 163.914 36.0444C162.465 37.623 161.485 39.415 160.974 41.4204C163.021 40.183 164.748 38.8817 166.155 37.5164C167.562 36.1084 168.266 35.127 168.265 34.5724C168.265 33.975 168.03 33.6764 167.561 33.6764ZM185.28 39.1164C185.024 39.1164 184.896 39.031 184.896 38.8604C184.896 38.647 185.045 38.4124 185.344 38.1564C186.751 37.0044 187.454 35.959 187.454 35.0204C187.453 34.423 186.92 34.0817 185.853 33.9964C183.933 34.039 181.63 35.4257 178.944 38.1564C176.3 40.887 174.979 42.935 174.98 44.3004C174.98 44.7697 175.236 45.0044 175.748 45.0044C176.303 45.0044 177.028 44.6417 177.924 43.9164C178.734 43.4044 180.248 42.1244 182.465 40.0764C182.977 39.5644 183.467 39.3084 183.937 39.3084C184.534 39.3084 184.833 39.5857 184.833 40.1404C184.833 40.3537 184.769 40.5244 184.641 40.6524C184.514 40.7804 184.279 41.0577 183.938 41.4844C183.597 41.8684 183.299 42.231 183.043 42.5724C182.276 43.6817 181.892 44.407 181.892 44.7484C181.893 45.6017 182.235 46.0284 182.917 46.0284C183.813 46.0284 185.498 45.2177 187.972 43.5964C190.445 41.9324 192.705 40.2684 194.752 38.6044L197.822 36.1724C198.121 35.959 198.398 35.8524 198.654 35.8524C198.91 35.8524 199.038 36.0017 199.038 36.3004L199.038 36.4284C195.755 39.2017 192.28 41.8044 188.612 44.2364C184.987 46.6684 182.598 47.8844 181.446 47.8844C180.081 47.8844 179.398 47.159 179.397 45.7084C179.397 45.367 179.461 45.047 179.588 44.7484C179.716 44.4497 179.78 44.2364 179.78 44.1084C179.78 43.9804 179.737 43.895 179.652 43.8524C179.524 43.8524 178.692 44.4284 177.157 45.5804C175.664 46.7324 174.342 47.3084 173.19 47.3084C172.081 47.3084 171.526 46.711 171.525 45.5164C171.524 44.3217 172.312 42.7217 173.889 40.7164C175.509 38.6684 177.663 36.8124 180.35 35.1484C183.036 33.4844 185.66 32.6524 188.22 32.6524C188.817 32.6524 189.308 32.8017 189.692 33.1004C190.119 33.399 190.333 33.8684 190.333 34.5084C190.334 35.1057 189.716 36.023 188.479 37.2604C187.243 38.4977 186.176 39.1164 185.28 39.1164ZM198.193 35.6604L198.065 34.9564C198.065 34.743 198.513 34.6364 199.409 34.6364C199.921 34.6364 200.177 34.9564 200.177 35.5964C200.178 36.2364 199.432 37.6657 197.94 39.8844C196.491 42.0604 195.767 43.191 195.767 43.2764C195.767 43.3617 195.852 43.4044 196.023 43.4044C196.194 43.4044 198.155 41.911 201.908 38.9244C205.703 35.9377 207.985 34.4444 208.753 34.4444C209.521 34.4444 209.905 34.7217 209.905 35.2764C209.906 35.7884 209.693 36.3857 209.266 37.0684C208.84 37.7084 207.945 38.903 206.581 40.6524C205.217 42.359 204.492 43.2764 204.407 43.4044C204.322 43.5324 204.279 43.6817 204.279 43.8524C204.279 44.023 204.407 44.1084 204.663 44.1084C204.962 44.1084 207.073 42.6577 210.996 39.7564C214.92 36.855 217.159 35.4044 217.713 35.4044C218.268 35.4044 218.545 35.639 218.546 36.1084C218.546 36.9617 217.609 38.455 215.733 40.5884C213.857 42.7217 212.919 44.087 212.92 44.6844C212.92 45.239 213.134 45.5164 213.56 45.5164C214.03 45.5164 215.16 44.919 216.951 43.7244C220.15 41.591 223.092 39.4364 225.779 37.2604L227.186 36.1084C227.527 35.895 227.804 35.7884 228.018 35.7884C228.274 35.7884 228.402 35.9164 228.402 36.1724L228.402 36.3644C219.405 43.8737 213.839 47.6284 211.706 47.6284C210.468 47.6284 209.849 47.1164 209.849 46.0924C209.848 45.239 210.466 43.9804 211.702 42.3164C212.938 40.6524 213.556 39.7564 213.556 39.6284C213.556 39.4577 213.492 39.3724 213.364 39.3724C213.279 39.3724 211.53 40.5884 208.119 43.0204C204.75 45.4524 202.745 46.6684 202.105 46.6684C201.806 46.6684 201.55 46.5617 201.337 46.3484C201.123 46.0924 201.017 45.8364 201.016 45.5804C201.016 44.8124 201.932 43.255 203.765 40.9084C205.598 38.6044 206.515 37.3457 206.514 37.1324C206.514 36.919 206.386 36.8124 206.13 36.8124C205.832 36.8124 202.804 39.159 197.047 43.8524L193.849 46.4124C193.295 46.8817 192.868 47.1164 192.569 47.1164C192.313 47.1164 192.057 47.031 191.801 46.8604C191.545 46.7324 191.417 46.519 191.417 46.2204C191.417 45.9217 191.779 45.1964 192.503 44.0444C193.271 42.8924 194.251 41.4844 195.444 39.8204C197.277 37.3457 198.194 35.959 198.193 35.6604ZM239.796 36.1724C240.137 35.959 240.414 35.8524 240.628 35.8524C240.884 35.8524 241.012 36.0017 241.012 36.3004L241.012 36.4284C237.729 39.2017 234.253 41.8044 230.585 44.2364C226.96 46.6684 224.657 47.8844 223.676 47.8844C222.695 47.8844 221.863 47.6924 221.18 47.3084C220.539 46.967 220.219 46.5617 220.219 46.0924C220.218 45.623 220.346 45.239 220.602 44.9404C220.858 44.599 221.092 44.4284 221.306 44.4284C221.519 44.4284 221.86 44.7697 222.33 45.4524C222.843 46.0924 223.334 46.4124 223.803 46.4124C224.784 46.4124 225.552 45.367 226.105 43.2764C226.658 41.1857 226.934 39.7564 226.934 38.9884C226.933 38.1777 226.869 37.7724 226.741 37.7724C226.656 37.7724 226.57 37.815 226.485 37.9004L224.63 39.3724L224.373 38.4124C227.06 36.279 228.616 34.8497 229.042 34.1244C229.298 33.4417 229.66 33.1004 230.13 33.1004C230.428 33.1004 230.578 33.207 230.578 33.4204C230.578 33.6337 230.429 34.103 230.131 34.8284C229.833 35.511 229.428 37.0897 228.918 39.5644C228.451 42.039 228.217 43.4684 228.217 43.8524C228.217 44.2364 228.324 44.4284 228.538 44.4284C231.523 42.5937 234.679 40.311 238.005 37.5804L239.796 36.1724Z"
                      fill="#EB5757">
                </path>
            </SVGContainer>

            <CaruselaContainer>
                <Carusela />
            </CaruselaContainer>

            <Button onClick={redirectionareSignUp}>Try now</Button>
        </LetDreamsContainer>
    );
};

export default LetDreamerz;