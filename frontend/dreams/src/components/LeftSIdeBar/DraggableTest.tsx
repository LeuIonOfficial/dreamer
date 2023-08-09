import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Dashboard/DashboardComponents/Dashboard.css";
import BigImageModal from "../components/Partials/BigImageModal";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Card from "../components/Partials/Card";
import {useNavigate} from "react-router-dom";
// images
import Comments from "../components/Comments";
import DreamMakers from "../components/DreamMakers";
import ReceivedDreams from "../components/ReceivedDreams";
import DreamDetails from "../components/DreamDetails";
import DreamPhotos from "../components/DreamPhotos";
import ProfilePhotos from "../components/ProfilePhotos";
import Biography from "../components/Biography";
import BgDropDown from "../components/BgDropDown";
import FulfilledDream from "../components/FulfilledDream";
import Draggable from "react-draggable";
import SimpleImageModal from "../components/Partials/SimpleImageModal";
import {
    getAllProfileDonations,
    getDreamDonations,
    getProfileDream,
    getProfileFulfilled,
    getProfileWingDonations,
    getUser,
    imagePosition,
} from "../services/api";
import {
    setAllProfileFulfilled,
    setDream,
    setProfileFulfilled,
    setProfileReceived,
    setProfileWingDonations,
    setUser,
} from "../store/users";

const UserProfile = () => {
    const user = useSelector((state) => state.usersModule).user;
    const dream = useSelector((state) => state.usersModule).dream; //don't forget to delete [0]
    const mainImg = useSelector((state) => state.usersModule).mainImage;
    const coverImage = useSelector((state) => state.usersModule).user.coverImage;
    const [imageId, setImageId] = useState(false);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [coverImageHeight, setImageHeight] = useState(0);
    const childRef = useState(null);
    const [mainBigImage, setMainBigImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const coverContainer = useRef(null);
    const coverImageRef = useRef(null);
    const draggbleDraggble = useRef(null);
    const dispatch = useDispatch();
    const fulfilled = useSelector((state) => state.usersModule).profileFulfilled;
    const profileReceived = useSelector(
        (state) => state.usersModule
    ).profileReceived;
    const wingDonationsProfile = useSelector(
        (state) => state.usersModule
    ).profileWingDonations;
    const [coverImagePosition, setCoverImagePosition] = useState(0);
    const [allUserImages, setAllImages] = useState(user);
    const [bigImages, setBigImages] = useState(false);
    const [currnetIndex, setIndex] = useState(null);
    const [tab, setTab] = useState("second");

    const setTabCallback = (e) => {
        setTab(e);
        window.scrollTo(0, 0);
    };

    const saveImagePosition = () => {
        const position = Number(Math.abs(draggbleDraggble.current.state.y));
        imagePosition(user?.coverImage?.id, position);
        setCoverImagePosition(Math.abs(draggbleDraggble.current.state.y));
        draggbleDraggble.current.state.y = 0;
        setDisabled((prev) => !prev);
    };

    const cancelPosition = () => {
        draggbleDraggble.current.state.y = 0;
        setCoverImagePosition((prev) => prev);
        setDisabled((prev) => !prev);
    };

    const returnPosition = () => {
        setCoverImagePosition(0);
    };

    const handleBigImages = (index) => {
        setBigImages(true);
        setIndex(index);
    };

    const setMouseLeave = () => {
        setImageId(false);
        document.querySelectorAll(".menu").forEach((el) => {
            el.classList.remove("show");
        });
    };
    const handleMainBigImage = (img) => {
        setImageUrl(img);
        setMainBigImage(true);
    };

    useEffect(() => {
        setAllImages({
            ...user,
            images: user?.images.concat({url: user?.mainImageUrl, isMain: true}),
        });
    }, [user?.images]);

    useEffect(() => {
        if (user?.mainImageUrl !== null) {
            setAllImages({
                ...user,
                images: user?.images.concat({url: user?.mainImageUrl, isMain: true}),
            });
        }
        setCoverImagePosition(coverImage?.position || 0);
    }, []);



    useEffect(() => {
        // document.body.classList.add('remove-scroll')
        setImageHeight(coverImageRef?.current.clientHeight);
    }, [mainImg, disabled]);



    const toggleHandleDrag = () => {
        if (coverImage) {
            draggbleDraggble.current.state.y = -coverImagePosition;
            setDisabled((prev) => !prev);
        }
    };

    const defalutMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };


                                <Draggable
                                    disabled={disabled}
                                    ref={draggbleDraggble}
                                    onMouseDown={(e) => defalutMove(e)}
                                    nodeRef={coverImageRef}
                                    bounds={{
                                        top: -`${coverImageHeight / 2}`,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                    }}
                                >
                                    <img
                                        style={{
                                            position: `${
                                                disabled && coverImage?.url ? "absolute" : "absolute"
                                            }`,
                                            top: Number(
                                                `${disabled && coverImage ? -coverImagePosition : 0}`
                                            ),
                                            width: "100%",
                                            objectFit: "cover",
                                            cursor: `${!disabled ? "move" : "pointer"}`,
                                            background: "transparent",
                                        }}
                                        ref={coverImageRef}
                                        src={coverImage?.url || "/coverImg.png"}
                                        alt="profile-bg"
                                        className={
                                            coverImage?.url
                                                ? "rounded img-fluid height-auto"
                                                : "rounded img-fluid profile-profile-bg"
                                        }
                                        onClick={() =>
                                            disabled && coverImage
                                                ? handleMainBigImage(coverImage?.url)
                                                : null
                                        }
                                    />
                                </Draggable>
