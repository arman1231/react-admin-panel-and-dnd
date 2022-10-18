import React, { useState } from "react";
import "./user.scss";
import {
  Person,
  LockOpen,
  AddCard,
  EditNotifications,
} from "@mui/icons-material/";
import { Redirect, useHistory } from "react-router-dom";

export default function User() {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const saveUser = () => {
        setTimeout(() => setIsLoading(false), 1000)
        setTimeout(() => history.push('/users'), 1000)
    }
    const handleSubmit = (e) =>  {
        e.preventDefault()
        setIsLoading(true)
        saveUser()
    }
  return (
    <div className="user">
      <div className="userTitleWrap">
        <h1 className="userTitle">Редактировать профиль</h1>
        <button className="userAddButton">Создать</button>
      </div>
      {isLoading ? <div>Saving changes...</div> :  <div className="userContainer">
        <ul className="userControlsList">
          <li className="sidebarListItem">
            <div className="sidebarListItemContent">
              <Person className="sidebarIcon" />
              Редактировать
            </div>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarListItemContent">
              <LockOpen className="sidebarIcon" />
              Изменить пароль
            </div>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarListItemContent">
              <AddCard className="sidebarIcon" />
              Платежные данные
            </div>
          </li>
          <li className="sidebarListItem">
            <div className="sidebarListItemContent">
              <EditNotifications className="sidebarIcon" />
              Уведомления
            </div>
          </li>
        </ul>
        <div className="userUpdate">
          <div className="userInfoWrap">
            <img src="" alt="" className="userAvatar" />
            <button className="userUpdateAvatar userAddButton">
              Обновить фото
            </button>
            <button className="userRemoveAvatar userAddButton">
              Удалить фото
            </button>
          </div>
          <form className="userUpdateForm">
            <div className="userUpdateFormWrap">
              <div className="userUpdateFormLeft">
                <div className="userUpdateFormItem">
                  <label>Имя</label>
                  <input
                    className="userUpdateFormInput"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Email</label>
                  <input
                    className="userUpdateFormInput"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Телефон</label>
                  <input
                    className="userUpdateFormInput"
                    type="phone"
                    placeholder="Телефон"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Город</label>
                  <input
                    className="userUpdateFormInput"
                    type="text"
                    placeholder="Город"
                  />
                </div>
              </div>
              <div className="userUpdateFormRight">
                <div className="userUpdateFormItem">
                  <label>Имя пользователя</label>
                  <input
                    className="userUpdateFormInput"
                    type="text"
                    placeholder="Имя пользователя"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Дата рождения</label>
                  <input
                    className="userUpdateFormInput"
                    type="date"
                    placeholder="Дата рождения"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Вебсайт</label>
                  <input
                    className="userUpdateFormInput"
                    type="text"
                    placeholder="Вебсайт"
                  />
                </div>
                <div className="userUpdateFormItem">
                  <label>Почтовый индекс</label>
                  <input
                    className="userUpdateFormInput"
                    type="text"
                    placeholder="Почтовый индекс"
                  />
                </div>
              </div>
            </div>
            <button className="userSubmitButton userAddButton" type="submit" onClick={handleSubmit}>
              Сохранить
            </button>
          </form>
        </div>
      </div>}
     
    </div>
  );
}
