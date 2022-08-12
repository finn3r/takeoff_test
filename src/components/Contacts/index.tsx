import React, {useState, useDeferredValue, useEffect} from 'react';
import Contact from "./Contact";
import * as ST from "../../styled";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {editorSlice} from "../../store/reducers/EditorSlice";
import {userAPI} from "../../services/UserService";
import Spinner from "../Spinner";
import {IContact} from "../../models/IContact";

const Contacts: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const searchQuery = useDeferredValue(searchInput);
    const {id} = useAppSelector(state => state.auth);
    const {show} = editorSlice.actions;
    const {data, isLoading} = userAPI.useGetContactsQuery(id);
    const dispatch = useAppDispatch();
    /*Данный блок сделан, т.к. возникает проблема с поиском напрямую через запрос. Т.к. из-за формата хранения фотографий(base64), они находятся по текстовому запросу.*/
    const [contacts, setContacts] = useState<IContact[]>([]);

    useEffect(() => {
        const filteredContacts: IContact[] = data ?
            data.filter((contact) =>
                contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                || contact.email.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                || contact.phone.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
            ) : [];
        setContacts(filteredContacts);
    }, [data, searchQuery]);

    /*Конец блока*/

    const handleAdd = () => {
        dispatch(show(id!));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <ST.ContactsContainer>
            <ST.ContactsSearchInput value={searchInput} onChange={handleSearch}/>
            <ST.ContactsAddButton onClick={handleAdd}>
                Add
            </ST.ContactsAddButton>
            {
                (isLoading) ? <Spinner/> :
                    contacts!.length > 0 ? contacts!.map((contact, id) => <Contact contact={contact} key={id}/>)
                        :
                        <ST.ContactsText>
                            Ничего не найдено.
                        </ST.ContactsText>
            }
        </ST.ContactsContainer>
    );
};

export default Contacts;