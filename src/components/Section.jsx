import React from "react";
import "../styles/sections.scss";
import { education } from "../Data/DataEduc";
import { sciences } from "../Data/DataSciences";
import { sante } from "../Data/DataSante";
import { image } from "../Data/DAtaImage";

const Section = () => {
  return (
    <div className="section">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo
        expedita harum explicabo reiciendis natus, inventore reprehenderit ad
        molestiae dolores nam quam error tenetur. Ut ratione enim molestiae
        dolor aperiam!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        cumque vitae quisquam officia repellendus ratione beatae numquam, facere
        similique earum quae ea iusto distinctio. Assumenda culpa porro corrupti
        at! Dicta. Architecto quos, tenetur aliquid impedit a perferendis facere
        possimus blanditiis tempore id maiores cum praesentium unde mollitia
        corporis, velit soluta beatae quis! Consequatur quos a dignissimos
        accusamus repellat corrupti ipsam! Magni doloribus at quas accusamus
        esse, corrupti quae inventore, nostrum fugit, tempore eos asperiores
        itaque amet aperiam. Vitae necessitatibus magni possimus enim, tempora
        maxime rem velit eum, quisquam, consequatur voluptatem. Doloremque illo
        corporis veniam quisquam laudantium sed ipsam perspiciatis error?
        Adipisci vero porro ducimus obcaecati quasi aliquam dolores, beatae
        mollitia quae itaque tenetur deserunt quas ipsum earum cumque doloremque
        veritatis?
      </p>
      <h2>Les meilleurs livres de l'année</h2>
      <div className="fixed"></div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          veritatis, excepturi fugit vitae esse nesciunt consequatur qui eaque
          similique sint inventore explicabo nulla incidunt officiis optio,
          tempora corrupti minima harum? Adipisci, necessitatibus ipsa! Eaque
          eius, dignissimos impedit dolorum ad exercitationem dolores hic
          excepturi quam sint voluptatibus odit praesentium distinctio. Eius
          aperiam dolorum doloremque provident vero quos ut similique. Magni,
          officia?
        </p>
      </div>
      <div className="sectionLivresMeilleurs">
        <h1>Amour</h1>
        <div className="education">
          {education.map((el) => {
            return (
              <div className="educationElement">
                <h4>Titre : {el.Titre}</h4>
                <p>{el.generic}</p>
                <h6>Année de sortie : {el.Annee}</h6>
                <a href="https://www.google.com">Lire ce livre</a>
              </div>
            );
          })}
        </div>

        <h1>Passion</h1>

        <div className="sciences">
          {sciences.map((el) => {
            return (
              <div className="sciencesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>{el.generic}</p>
                <h6>Année de sortie : {el.Annee}</h6>
              </div>
            );
          })}
        </div>

        <h1>Famille</h1>

        <div className="sante">
          {sante.map((el) => {
            return (
              <div className="santeElement">
                <h4>Titre : {el.Titre}</h4>
                <p>{el.generic}</p>
                <h6>Année de sortie : {el.Annee}</h6>
              </div>
            );
          })}
        </div>
        <h2>Les meilleurs chroniqueurs de l'année</h2>

        <h3>Catégories Découverte</h3>
        {/* <div>
          <ul>
            <li>
              <p>Le chroniqueurs Rich Plume</p>
              <p>Nombre d'abonnée : 100k</p>
              <img src="../../../public/assets/media/2.jpg" alt="" />
              <p>Titre : Mon histoire d'amour</p>
              <p>Nombre d'auditeur : 200k </p>
            </li>
          </ul>
        </div> */}

        <div className="categories">
          {image.map((el) => {
            return (
              <div className="categoriesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>Auteur : {el.Auteur}</p>

                <p>Nombre d'abonnée : {el.abonnee}</p>
              </div>
            );
          })}
        </div>
        <h3>Categories choix du public</h3>
        <div className="categories">
          {image.map((el) => {
            return (
              <div className="categoriesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>Auteur : {el.Auteur}</p>

                <p>Nombre d'abonnée : {el.abonnee}</p>
              </div>
            );
          })}
        </div>
        <h3>Categories : Féminine</h3>
        <div className="categories">
          {image.map((el) => {
            return (
              <div className="categoriesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>Auteur : {el.Auteur}</p>

                <p>Nombre d'abonnée : {el.abonnee}</p>
              </div>
            );
          })}
        </div>
        <h3>Categories : Plus jeune chroniqueur</h3>
        <div className="categories">
          {image.map((el) => {
            return (
              <div className="categoriesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>Auteur : {el.Auteur}</p>

                <p>Nombre d'abonnée : {el.abonnee}</p>
              </div>
            );
          })}
        </div>
        <h3>Categories masculine </h3>
        <div className="categories">
          {image.map((el) => {
            return (
              <div className="categoriesElement">
                <h4>Titre : {el.Titre}</h4>
                <p>Auteur : {el.Auteur}</p>

                <p>Nombre d'abonnée : {el.abonnee}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
