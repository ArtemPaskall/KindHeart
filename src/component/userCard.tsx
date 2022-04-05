import React from 'react';
import { User } from '../user';
import './userCard.scss'

type Props = {
  user: User;
  onClear: () => void;
}

export const UserCard: React.FC<Props> = ({ user, onClear }) => {

  return (
      <div 
       className="User"
      >
          <p  className="User__header">
            {`Шановний ${user.name} ${user.surname}!!!`}  
          </p>
          <p  className="User__header"> 
            Дякуємо за Вашу допомогу!!!
          </p>
          <div>
            Компанія:
            {user.company && (<span> {user.company}</span>)}
          </div>
          <div>
            E-mail:
            {user.email && (<span> {user.email}</span>)}
          </div>
          <div>
            Номер телефону:
            {user.phone && (<span> {user.phone}</span>)}
          </div>
          <div>
            Країна:
            {user.country && (<span> {user.country}</span>)}
          </div>
          <div>
            Місто:
            {user.city && (<span> {user.city}</span>)}
          </div>
          <div>
            Регіон:
            {user.region && (<span> {user.region}</span>)}
          </div>
          <div>
            Адреса:
            {user.adress && (<span> {user.adress}</span>)}
          </div>
          <div>
            Індекс:
            {user.index && (<span> {user.index}</span>)}
          </div>
          <p> 
           Карта:
            {' '}
            {user.paySystem}  
          </p>
          <p> 
            Номер карты:
            {' '}
            {user.cardNumber1}{' **** **** '}{user.cardNumber4}
          </p> 

          <button
            type="button"
            className="App__button-submit"
            onClick={onClear}
          >
            Clear
          </button>
      </div>
  )  
}
