import React, {useState, useDeferredValue, useEffect} from 'react';
import Contact from "./Contact";
import * as ST from "../../styled";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {editorSlice} from "../../store/reducers/EditorSlice";
import {userAPI} from "../../services/UserService";
import Spinner from "../Spinner";
import {IContact} from "../../models/IContact";
import AddIcon from "../../assets/AddContactIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import ClearIcon from "../../assets/CloseIcon.svg";
import {useNavigate} from "react-router-dom";

const Contacts: React.FC = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState<string>("");
    const searchQuery = useDeferredValue(searchInput);
    const {id} = useAppSelector(state => state.auth);
    const {show} = editorSlice.actions;
    const {data, isLoading, isError} = userAPI.useGetContactsQuery(id);
    const dispatch = useAppDispatch();
    /*Данный блок сделан, т.к. возникает проблема с поиском напрямую через запрос. Т.к. из-за формата хранения фотографий(base64), они находятся по текстовому запросу.*/
    const [contacts, setContacts] = useState<IContact[]>([]);

    useEffect(() => {
        if (isError) {
            navigate('/login')
        } else {
            const filteredContacts: IContact[] = data ?
                data.filter((contact) =>
                    contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                    || contact.email.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                    || contact.phone.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                ) : [];
            setContacts(filteredContacts);
        }
    }, [data, searchQuery, isError, navigate]);
    /*Конец блока*/

    const handleAdd = () => {
        dispatch(show(id!));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <ST.ContactsContainer>
            <ST.ContactsHeader>
                <ST.ContactsSearchContainer>
                    <ST.ContactsSearchIcon src={SearchIcon} alt={""}/>
                    <ST.ContactsSearchInput value={searchInput} onChange={handleSearch}/>
                    <ST.ContactsClearIcon src={ClearIcon} hidden={Boolean(searchInput)} onClick={() => setSearchInput("")} alt={""}/>
                </ST.ContactsSearchContainer>
                <ST.ContactsAddButton onClick={handleAdd}>
                    <ST.AddContactButton src={AddIcon} alt={""}/>
                    <ST.AddContactText>
                        Новый контакт
                    </ST.AddContactText>
                </ST.ContactsAddButton>
            </ST.ContactsHeader>
            {(isLoading) ? <Spinner/> :
                <ST.ContactsContent>
                    {contacts!.length > 0 ?
                        <>
                            <ST.ContactsInfoHeader>
                                <ST.ContactInfo>Имя</ST.ContactInfo>
                                <ST.ContactInfo>Почта</ST.ContactInfo>
                                <ST.ContactInfo>Телефон</ST.ContactInfo>
                            </ST.ContactsInfoHeader>
                            {contacts!.map((contact, id) => <Contact contact={contact} key={id}/>)}
                        </>
                        :
                        <ST.ContactsText>
                            {(data?.length ?? 0) > 0 ?
                                "Ничего не найдено"
                                :
                                "У вас пока нет контактов"}
                        </ST.ContactsText>}
                </ST.ContactsContent>}
        </ST.ContactsContainer>)
};

export default Contacts;