import React, {useEffect, useState} from 'react';
import {Container, Icon, IconBox, Img, ImgBox, ProdoctsBox, Table, Td, Tr} from "../Prodocts/style";
import {Link} from "react-router-dom";
import {requests} from "../../../../api/requests";
import s from "sweetalert2";
import {Add, Addnew} from "../Patners/style";


const Categories = () => {
    const link="/dashboard/category/edit/"
    const [category,setCategory]=useState([])
    let effect = async () => {
        try {
            let res = await requests.category.getCategories();
            setCategory(res.data);
        } catch (error) {}
    };
    useEffect(() => {
        effect();
    }, []);

    let onDelete = async (id) => {
        try {
            let res = await s.fire({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                icon: 'warning',
                dangerMode: true,
                showCancelButton: true,
                showConfirmButton: true,
            });
            console.log(res);
            if (!!res.isConfirmed) {
                s.showLoading();
                let deleteRes = await requests.category.deleteCategory(id);
                await effect();
                s.hideLoading();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Container>
                <Addnew>
                    <Link
                        style={{textDecoration: "none"}}
                        to="/dashboard/category/addnew">
                        <Add>
                            Add new <i class="bx bx-plus"></i>
                        </Add>
                    </Link>
                </Addnew>
                {category?.map((e) => {
                    console.log(e)
                    return (
                        <ProdoctsBox>
                            <Table>
                                <Tr>
                                    <Td>
                                        {/*<ImgBox>*/}
                                        {/*    <Img src={e.image_url} />*/}
                                        {/*</ImgBox>*/}
                                    </Td>
                                    <Td>{e.name}</Td>
                                    {/*<Td>{e.price}</Td>*/}
                                    {/*<Td>{e.category.name}</Td>*/}
                                    {/*<Td>{e.expires_in}</Td>*/}
                                </Tr>
                            </Table>
                            <Icon>

                                <Link
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    to=
                                        {
                                            {
                                                pathname: `${link}${e.id}`,
                                                editProps:{
                                                    id:e.id,
                                                    name:e.name,
                                                }
                                            }
                                        }

                                >
                                    <IconBox>
                                        <i class='bx bxs-edit'></i>
                                    </IconBox>
                                </Link>
                                <IconBox
                                    onClick={() => onDelete(e.id)}
                                >
                                    <i class='bx bx-trash-alt'></i>
                                </IconBox>
                            </Icon>
                        </ProdoctsBox>
                    );
                })}
            </Container>
        </>
    );
};

export default Categories;
