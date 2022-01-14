import React, {useEffect, useRef, useState} from 'react';
import {
    Container,
    AllContainer,
    Botton,
    BottonContainer, CategoriyaPatnerContainer,
    Image,
    ImgBox,
    ImgContainer,
    Input,
    InputAreContainer, InputContainer, Inputt, Textarea, Cancel, CanacelSaveContainer
} from "../Addnew/style";
import Img from "../../../../../assests/image_2021-11-08_19-42-30.png";
import Dropdown from "../../../../../components/navigation/Dropdown";
import {requests, url} from "../../../../../api/requests";
import Swal from "sweetalert2";
import {NavLink, useHistory} from "react-router-dom";

const Edit = (props) => {
    const id =props.location.editProps.id
    let history = useHistory();
    let _imageInput = useRef();
    let [categories, setCategories] = useState([]);
    let [partners, setPartnets] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState();
    let [selectedPartners, setSelectedPartners] = useState();
    const priceRef=useRef(null)
    const expiresRef=useRef(null)
    const profitRef=useRef(null)
    const nameRef=useRef(null)
    const textRef=useRef(null)
    let [image, setImage] = useState();
    let [images, setImages] = useState([]);
    let onUpload = (e) => {
        _imageInput.current.click();

    };
    let effect = async () => {
        console.log('loading category');
        try {
            let resCategory = await requests.category.getCategories();
            setCategories(resCategory.data);
            let resPartner = await requests.partners.getPartners();
            setPartnets(resPartner.data);
        } catch (error) {
            console.log({ error });
        }
    };
    useEffect(() => {
        effect();
    }, []);
    let onAddNewImage = () => {
        setImages([
            ...images,
            {
                image_url: '',
                name: '',
            },
        ]);
    };
    let onImageUpload = async (e, index) => {
        if (e.target.files.length > 0) {
            let form = new FormData();
            form.append('files', e.target.files[0]);
            try {
                let res = await requests.uploads.uploadImage(form);
                setImage({
                    name: e.target.files[1],
                    image_url: `${url}/file-download/${res.data[0]}`,
                });
            } catch (error) {
                alert(error);
            }
        }
    };
    let onSave = async () => {
        try {
            Swal.showLoading(Swal.getDenyButton());
            let res = await requests.products.editProduct({
                id:id,
                category_id: selectedCategory?.id,
                price: parseInt(priceRef.current.value),
                name: nameRef.current.value,
                description: textRef.current.value,
                image_url: image.image_url,
                profit_percent:parseInt(profitRef.current.value),
                expire_date: '13/11/2022 00.00.00'
            });

            Swal.hideLoading();
            await Swal.fire(
                'Success',
                `${nameRef.current.value} has been successfully edited`,
                'success'
            );
            history.push('/dashboard/prodocts');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Container>
            <AllContainer>
                <ImgContainer>
                    <ImgBox>
                        <Image
                            src=
                                {
                                    !!image ? image.image_url : Img
                                    // !!image ? image.image_url :
                                    //     Img
                                    // props.location.editProps.img_url
                                }
                        />
                        <input
                            ref={_imageInput}
                            type={'file'}
                            name='image'
                            id='image-upload'

                            onChange={onImageUpload}
                        />
                    </ImgBox>
                    <BottonContainer>
                        <Botton>Reset</Botton>
                        <Botton
                            onClick={onUpload}

                        >
                            Upload</Botton>
                    </BottonContainer>
                </ImgContainer>
                <InputAreContainer>
                    <Input
                        placeholder='name'
                        // onChange={onChangeTitle}
                        defaultValue={props.location.editProps.name}
                        ref={nameRef}
                    />
                    <Textarea
                        placeholder='Description'
                        // onChange={onChangeDesc}
                        defaultValue={props.location.editProps.desc}
                        ref={textRef}
                    />
                    <CategoriyaPatnerContainer>
                        <Dropdown
                            data={categories?.length ? categories : []}
                            setSelected={setSelectedCategory}
                            selected={
                                !!selectedCategory ? selectedCategory.id : -1
                            }
                            placeholder={'Select Category'}
                            name={
                                !!selectedCategory
                                    ? selectedCategory.name
                                    : 'Select category'
                            }
                        />
                        <Dropdown
                            data={partners?.length ? partners : []}
                            setSelected={setSelectedPartners}
                            selected={
                                !!selectedPartners ? selectedPartners.id : -1
                            }
                            placeholder={'Select Partner'}
                            name={
                                !!selectedPartners
                                    ? selectedPartners.name
                                    : 'Select category'
                            }
                        />
                    </CategoriyaPatnerContainer>
                    <InputContainer>
                        <Inputt
                            placeholder='price'
                            defaultValue={props.location.editProps.price}
                            ref={priceRef}
                            // value={price}
                            // onChange={(e) => setPrice(e.target.value)}
                        />
                        <Inputt
                            defaultValue={props.location.editProps.expires}
                            ref={expiresRef}
                            placeholder='expire' />
                        <Inputt
                            placeholder='profit'
                            ref={profitRef}
                            defaultValue={props.location.editProps.profit_percent}
                            // onChange={(e) => setProfit(e.target.value)}
                        />
                    </InputContainer>
                </InputAreContainer>
            </AllContainer>
            <CanacelSaveContainer>
                <Cancel><NavLink to="/dashboard/prodocts">Cancel</NavLink></Cancel>
                <Cancel onClick={onSave}>Edit</Cancel>
            </CanacelSaveContainer>
        </Container>
    );
};

export default Edit;
