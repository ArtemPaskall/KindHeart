import React, { useState } from 'react';
import classNames from 'classnames';
import './styles/App.scss';
import { UserCard } from './component/userCard';
import { User } from './user';

export const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [index, setIndex] = useState<string>('');
  const [paySystem, setPaySystem] = useState<string>('');
  const [cardNumber1, setCardNumber1] = useState<string>('');
  const [cardNumber2, setCardNumber2] = useState<string>('');
  const [cardNumber3, setCardNumber3] = useState<string>('');
  const [cardNumber4, setCardNumber4] = useState<string>('');
  const [term, setTerm] = useState<string>('');
  const [CVC, setCVC] = useState<string>('');

  const [nameErorr, setNameErorr] = useState<boolean>(false);
  const [surnameErorr, setSurnameErorr] = useState<boolean>(false);
  const [phoneErorr, setPhoneErorr] = useState<boolean>(false);
  const [paySystemErorr, setPaySystemErorr] = useState<boolean>(false);
  const [cardNumber1Erorr, setCardNumber1Erorr] = useState<boolean>(false);
  const [cardNumber2Erorr, setCardNumber2Erorr] = useState<boolean>(false);
  const [cardNumber3Erorr, setCardNumber3Erorr] = useState<boolean>(false);
  const [cardNumber4Erorr, setCardNumber4Erorr] = useState<boolean>(false);

  const [user, setUser] = useState<User | null>(null);

  const validateInput = () => {
    setNameErorr(!name);
    setSurnameErorr(!surname);
    setPhoneErorr(!phone);
    setPaySystemErorr(!paySystem);
    setCardNumber1Erorr(!cardNumber1);
    setCardNumber2Erorr(!cardNumber2);
    setCardNumber3Erorr(!cardNumber3);
    setCardNumber4Erorr(!cardNumber4);
  };

  const clearInput = () => {
    setName('');
    setSurname('');
    setCompany('');
    setEmail('');
    setPhone('');
    setCountry('');
    setCity('');
    setRegion('');
    setAdress('');
    setIndex('');
    setPaySystem('');
    setCardNumber1('');
    setCardNumber2('');
    setCardNumber3('');
    setCardNumber4('');
    setTerm('');
    setCVC('');
  };

  const clearUser = () => {
    setUser(null);
  };
 
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    validateInput();

     if (name && surname && paySystem && phone && cardNumber1 && cardNumber2 && cardNumber3 && cardNumber4)  {
      setUser({
        name,
        surname,
        company,
        email,
        phone,
        country,
        region,
        city,
        adress,
        index,
        paySystem,
        cardNumber1,
        cardNumber2,
        cardNumber3,
        cardNumber4,
      })
      clearInput();
    } 
  };

  return (
    <div className="App">
      <div className="Container">
        <h1 className="App__header">Заповніть форму</h1>
        <div className="App__buttons">
          <button
            className="App__button App__button--left App__button--is-active"
          >
            Фіз. осооба
          </button>
          <button
            className="App__button App__button--right"
          >
            Юр. осооба
          </button>
        </div>
        
        <form 
          className="App__form"
          onSubmit={onSubmitHandler}
        >
          <a href="#" className="App__form--logo">
            <span>
              + Логотип
            </span>
          </a>
          <div className="App__input-block">
            <div className="App__1-column">
              <div className="App__1-column--2in1">
                <label className="App__label">
                  Ім'я <span style={{color: "red"}}>&lowast;</span>
                  <input 
                    className={classNames(
                      'App__input',
                      {'App__error': nameErorr},
                    )}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setNameErorr(false);
                    }}
                  >
                  </input>
                </label>
                <label className="App__label">
                  Прізвище <span style={{color: "red"}}>&lowast;</span>
                  <input 
                     className={classNames(
                      'App__input',
                      {'App__error': surnameErorr},
                    )}
                    value={surname}
                    onChange={(event) => {
                      setSurname(event.target.value);
                      setSurnameErorr(false);
                    }}
                  >
                  </input>
                </label>
              </div>
              <label className="App__label">
                Назва компанії, організації
                <input 
                  className="App__input"
                  value={company}
                  onChange={(event) => 
                    setCompany(event.target.value)}
                >
                </input>
                 
              </label>
              <label className="App__label App__label--iPad">
                Email-адрес
                  <input 
                    className="App__input"
                    value={email}
                    onChange={(event) => 
                      setEmail(event.target.value)}
                  >
                  </input>
              </label>
              <label className="App__label">
                Номер телефону <span style={{color: "red"}}>&lowast;</span>
                <input 
                   className={classNames(
                     'App__input',
                     {'App__error': phoneErorr},
                   )}
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                    setPhoneErorr(false);
                  }}
                >
                </input>
              </label>
            </div>
            <div className="App__2-column">
              <label className="App__label">
                Країна
                <input 
                  className="App__input"
                  value={country}
                  onChange={(event) => 
                    setCountry(event.target.value)}
                >
                </input>
              </label>
              <div className="App__1-column--2in1">
              <label className="App__label">
                Місто
                <input 
                  className="App__input"
                  value={city}
                  onChange={(event) => 
                    setCity(event.target.value)}
                >
                </input>
              </label>
              <label className="App__label">
                Район
                <input 
                  className="App__input"
                  value={region}
                  onChange={(event) => 
                    setRegion(event.target.value)}
                >
                </input>
              </label>
              </div>
              <label className="App__label App__label--iPad">
                Адреса
                <input 
                  className="App__input"
                  value={adress}
                  onChange={(event) => 
                    setAdress(event.target.value)}
                >
                </input>
              </label>
              <div className="App__2-column--last">
                <label className="App__label">
                  Поштовий індекс
                  <input 
                  className="App__input"
                  value={index}
                  onChange={(event) => 
                    setIndex(event.target.value)}
                  >
                  </input>
                </label>
              </div>
                      
            </div>
          </div>

          <div className="App__input-block--mobile">
            <div className="App__1-column">
              <div className="App__1-column--2in1">
                <label className="App__label">
                  Ім'я <span style={{color: "red"}}>&lowast;</span>
                  <input 
                    className={classNames(
                      'App__input',
                      {'App__error': nameErorr},
                    )}
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setNameErorr(false);
                    }}
                  >
                  </input>
                </label>
                <label className="App__label">
                  Прізвище <span style={{color: "red"}}>&lowast;</span>
                  <input 
                     className={classNames(
                      'App__input',
                      {'App__error': surnameErorr},
                    )}
                    value={surname}
                    onChange={(event) => {
                      setSurname(event.target.value);
                      setSurnameErorr(false);
                    }}
                  >
                  </input>
                </label>
              </div>
              <label className="App__label">
                Назва компанії, організації
                <input 
                  className="App__input"
                  value={company}
                  onChange={(event) => 
                    setCompany(event.target.value)}
                >
                </input>
                  <a href="www.google.com" className="App__form--logo-mobile">
                    <span>
                      + Логотип
                    </span>
                  </a>
              </label>
              <label className="App__label App__label--iPad">
                Email-адрес
                <input 
                    className="App__input"
                    value={email}
                    onChange={(event) => 
                      setEmail(event.target.value)}
                >
                </input>
              </label>
              <label className="App__label">
                Номер телефону <span style={{color: "red"}}>&lowast;</span>
                <input 
                   className={classNames(
                     'App__input',
                     {'App__error': phoneErorr},
                   )}
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                    setPhoneErorr(false);
                  }}
                >
                </input>
              </label>
            </div>
            <div className="App__2-column">
              <label className="App__label">
                Країна
                <input 
                  className="App__input"
                  value={country}
                  onChange={(event) => 
                    setCountry(event.target.value)}
                > 
                </input>
              </label>
              <div className="App__1-column--2in1">
              <label className="App__label">
                Місто
                <input 
                  className="App__input"
                  value={city}
                  onChange={(event) => 
                    setCity(event.target.value)}
                >
                </input>
              </label>
              <label className="App__label">
                Район
                <input 
                  className="App__input"
                  value={region}
                  onChange={(event) => 
                    setRegion(event.target.value)}
                >
                </input>
              </label>
              </div>
              <label className="App__label">
                Адреса
                <input 
                  className="App__input"
                  value={adress}
                  onChange={(event) => 
                    setAdress(event.target.value)}
                >
                </input>
              </label>
              <div className="App__2-column--last">
                <label className="App__label">
                  Поштовий індекс
                  <input 
                  className="App__input"
                  value={index}
                  onChange={(event) => 
                    setIndex(event.target.value)}
                  > 
                  </input>
              </label>
              </div>
                      
            </div>
          </div>

          <h2 className="App__help">Види допомоги</h2>
          <p className="App__help-description">Ви можете змінити вид допомоги</p>
         
            <nav className="App__switch-help">
              <a href="#" className="App__switch-link">
                <div className="App__switch-img">
                  <div className="App__switch-picture--1"></div>
                </div>
                <span
                  className="App__switch-span"
                >
                  Зробити
                </span>
              </a>
              <a href="#" className="App__switch-link">
                <div className="App__switch-img App__switch-img--is-active">
                  <div className="App__switch-picture--2"></div>
                </div>
                <span
                  className="App__switch-span App__switch-span--is-active"
                >
                  Фінансова <br/> допомога
                </span>
              </a>
        
              <a href="#" className="App__switch-link">
                <div className="App__switch-img">
                  <div className="App__switch-picture--3"></div>
                </div>
                <span
                  className="App__switch-span"
                >
                  Матеріальна <br/> допомога
                </span>
              </a>
              <a href="#" className="App__switch-link">
                <div className="App__switch-img">
                  <div className="App__switch-picture--4"></div>
                </div>
                <span
                  className="App__switch-span"
                >
                  Волонтерство
                </span>
              </a>
            </nav>

          <div 
            className="App__payment"
          >
            <div className="App__left-section">
              <p className="App__text-header">Спосіб оплати <span style={{color: "red"}}>&lowast;</span> </p> 
              <div className="App__system-section">
               <button 
                  type="button"
                  className={classNames(
                    'App__pay-system',
                    'App__pay-system--1',
                    {'App__error': paySystemErorr},
                    {'App__pay-system--isActive': paySystem === 'Visa'},
                  )}
                  onClick={() => {
                    setPaySystem('Visa');
                    setPaySystemErorr(false);
                  }}
                >
                </button>
                <button 
                  type="button"
                  className={classNames(
                    'App__pay-system',
                    'App__pay-system--2',
                    {'App__error': paySystemErorr},
                    {'App__pay-system--isActive': paySystem === 'WebMoney'},
                  )}
                  onClick={() => {
                    setPaySystem('WebMoney');
                    setPaySystemErorr(false);
                  }}
                >
                </button>
                <button 
                  type="button"
                  className={classNames(
                    'App__pay-system',
                    'App__pay-system--3',
                    {'App__error': paySystemErorr},
                    {'App__pay-system--isActive': paySystem === 'PayPall'},
                  )}
                  onClick={() => {
                    setPaySystem('PayPall');
                    setPaySystemErorr(false);
                  }}
                >
                </button>
                <button 
                  type="button"
                  className={classNames(
                    'App__pay-system',
                    'App__pay-system--4',
                    {'App__error': paySystemErorr},
                    {'App__pay-system--isActive': paySystem === 'MasterCard'},
                  )}
                  onClick={() => {
                    setPaySystem('MasterCard');
                    setPaySystemErorr(false);
                  }}
                >
                </button>
                <button 
                  type="button"
                  className={classNames(
                    'App__pay-system',
                    'App__pay-system--5',
                    {'App__error': paySystemErorr},
                    {'App__pay-system--isActive': paySystem === 'Terminal'},
                  )}
                  onClick={() => { 
                    setPaySystem('Terminal');
                    setPaySystemErorr(false);
                  }}
                >
                </button>      
                                          
              </div>
            </div>
          
            <div className="App__right-section">
              <p>Введіть наступні дані</p>
              <div className="App__credit-card">
                <div className="App__card-wrap">

                <div className="App__card-upper-field">
                <p>Номер карти <span style={{color: "red"}}>&lowast;</span></p> 
                  <div className="App__card-number">
                    <input 
                      maxLength={4} 
                      className={classNames(
                        'App__card-input',
                        {'App__error': cardNumber1Erorr},
                      )}
                      value={cardNumber1}
                      onChange={(event) => {
                        setCardNumber1(event.target.value);
                        setCardNumber1Erorr(false);
                      }}
                    ></input>
                    <input 
                      maxLength={4} 
                      className={classNames(
                        'App__card-input',
                        {'App__error': cardNumber2Erorr},
                      )}
                      value={cardNumber2}
                      onChange={(event) => { 
                        setCardNumber2(event.target.value);
                        setCardNumber2Erorr(false);
                      }}
                    ></input>
                    <input 
                      maxLength={4} 
                      className={classNames(
                        'App__card-input',
                        {'App__error': cardNumber3Erorr},
                      )}
                      value={cardNumber3}
                      onChange={(event) => {
                        setCardNumber3(event.target.value);
                        setCardNumber3Erorr(false);
                      }}
                    ></input>
                    <input 
                      maxLength={4} 
                      className={classNames(
                        'App__card-input',
                        {'App__error': cardNumber4Erorr},
                      )}
                      value={cardNumber4}
                      onChange={(event) => {
                        setCardNumber4(event.target.value);
                        setCardNumber4Erorr(false);
                      }}
                    ></input>
                  </div>
                </div>
                  
                  <div className="App__card-bottom-field">
                    <div className="App__card-term">
                      <p>Термін дії</p>
                      <input 
                        className="App__card-term--input"
                        maxLength={3}
                        value={term}
                        onChange={(event) => {
                          setTerm(event.target.value);
                        }}
                      >
                      </input>
                    </div>

                    <div className="App__card-code">
                      <p>CVC/CVV</p>
                      <input 
                        className="App__card-code--input"
                        maxLength={3}
                        value={CVC}
                        onChange={(event) => {
                          setCVC(event.target.value);
                        }}
                      >
                      </input>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
   
          </div>


          <button
            type="submit"
            className="App__button-submit"
          >
            Допомогти
          </button>
        </form>

        {(user !== null) && <UserCard user={user} onClear={clearUser} />} 
      </div>
    </div>
  );
}
