import React from 'react';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/8780740?s=460&u=9042b545546fde6b5ab18466a3bba88b5968ee6c&v=4" alt="Nathan Amorim"/>
            <div>
              <strong>Nathan Amorim</strong>
              <span>Matemática</span>
            </div>
          </header>
          <p>
            Bacon ipsum dolor amet kevin capicola shankle, short loin drumstick tenderloin bresaola. 
            <br /> <br />
            Shank hamburger tri-tip pancetta jerky bacon, tail picanha. Bacon ipsum dolor amet kevin capicola shankle, short loin drumstick tenderloin bresaola.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whastappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;
