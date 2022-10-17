import * as React from "react";
import "./sidebar.scss";
import {
  Speed,
  ExpandLess,
  ExpandMore,
  ShoppingCart,
  ShoppingBag,
  Person,
  Image,
  People,
  CardGiftcard,
  Store,
  Email,
  Settings,
  PhoneIphone,
  Description,
} from "@mui/icons-material/";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openCatalog, setCatalogOpen] = React.useState(false);
  const [openClients, setClientsOpen] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);

  const togleState = (state, setState) => {
    setState(!state);
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Основные</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <Speed className="sidebarIcon" />
                Дашборд
              </div>
            </li>
            <li className="sidebarListItem" onClick={() => togleState(openCatalog, setCatalogOpen)}>
              <div className="sidebarListItemContent">
                <ShoppingCart className="sidebarIcon" />
                Каталог
              </div>
              {openCatalog ? (
                <div className="sidebarListItemControls">
                  <ExpandLess />
                </div>
              ) : (
                <div className="sidebarListItemControls">
                  <ExpandMore />
                </div>
              )}
            </li>
            <Collapse in={openCatalog} timeout="auto" unmountOnExit>
              <ul className="sudebarSublist">
                <li className="sidebarListItem">Товары</li>
                <li className="sidebarListItem">Категории</li>
                <li className="sidebarListItem">Коллекции</li>
                <li className="sidebarListItem">Комбо</li>
              </ul>
            </Collapse>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <ShoppingBag className="sidebarIcon" />
                Заказы
              </div>
            </li>
            <li className="sidebarListItem" onClick={() => togleState(openClients, setClientsOpen)}>
              <div className="sidebarListItemContent">
                <Person className="sidebarIcon" />
                Клиенты
              </div>
              {openClients ? (
                <div className="sidebarListItemControls">
                  <ExpandLess />
                </div>
              ) : (
                <div className="sidebarListItemControls">
                  <ExpandMore />
                </div>
              )}
            </li>
            <Collapse in={openClients} timeout="auto" unmountOnExit>
              <ul className="sudebarSublist">
                <li className="sidebarListItem">Список клиентов</li>
                <li className="sidebarListItem">Группы клиентов</li>
              </ul>
            </Collapse>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <Image className="sidebarIcon" />
                Баннеры
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <CardGiftcard className="sidebarIcon" />
                Промокоды
              </div>
            </li>
            <li className="sidebarListItem" onClick={() => togleState(openAddress, setOpenAddress)}>
              <div className="sidebarListItemContent">
                <Store className="sidebarIcon" />
                Офлайн точки
              </div>
              {openAddress ? (
                <div className="sidebarListItemControls">
                  <ExpandLess />
                </div>
              ) : (
                <div className="sidebarListItemControls">
                  <ExpandMore />
                </div>
              )}
            </li>
            <Collapse in={openAddress} timeout="auto" unmountOnExit>
              <ul className="sudebarSublist">
                <li className="sidebarListItem">Адреса</li>
                <li className="sidebarListItem">Геозоны</li>
              </ul>
            </Collapse>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <People className="sidebarIcon" />
                Сотрудники
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <Email className="sidebarIcon" />
                Рассылки
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Системные</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <Settings className="sidebarIcon" />
                Настройки
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <PhoneIphone className="sidebarIcon" />
                Мобильное приложение
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="sidebarListItemContent">
                <Description className="sidebarIcon" />
                Логи
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
