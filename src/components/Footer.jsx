"use client";

import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid"></div>
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">
        <div className="footer-section">
          <h3>ActiviTeen</h3>
          <p>
            Des idées d'activités pour animer tes séjours avec des adolescents
            de 11 à 17 ans.
          </p>
        </div>

        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <a
                href="https://jeunes.gouv.fr/bafa-bafd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site officiel BAFA
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about-dialog").showModal();
                }}
              >
                À propos
              </a>
            </li>
            <li>
              <a href="mailto:activiteen@outlook.com?subject=Proposition%20d'activité%20pour%20ActiviTeen&body=Bonjour%20l'équipe%20ActiviTeen%2C%0A%0AJe%20vous%20adresse%20cette%20proposition%20d'activité%20dans%20l'idée%20qu'elle%20puisse%20trouver%20sa%20place%20sur%20votre%20plateforme.%0A%0AVoici%20les%20éléments%20à%20renseigner%20:%0A%0A🔹%20Titre%20de%20l'activité%20:%20%0A🔹%20Type%20d'activité%20(artistique%2C%20sportive%2C%20réflexion%2C%20etc.)%20:%20%0A🔹%20Description%20brève%20:%20%0A🔹%20Objectif%20ou%20bénéfices%20:%20%0A🔹%20Préparation%20:%20%0A🔹%20Déroulement%20:%20%0A🔹%20Conseils%20ou%20variantes%20:%20%0A🔹%20Durée%20estimée%20:%20%0A🔹%20Tranche%20d'âge%20concernée%20:%20%0A🔹%20Matériel%20nécessaire%20:%20%0A%0A📸%20Joindre%20quelques%20photos%20est%20un%20gros%20plus%20:%20elles%20permettent%20de%20valoriser%20l'activité%20sur%20le%20site.%0A%0ABien%20à%20vous%2C%0A%5BPrénom%20Nom%5D">
                Proposer une activité
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} ActiviTeen - Tous droits réservés</p>
      </div>

      <dialog id="about-dialog" className="modal">
        <div className="modal-content">
          <h2>À propos d'ActiviTeen</h2>
          <p>
            ActiviTeen est une ressource pour les animateurs BAFA travaillant
            avec des adolescents. L'objectif est de partager des idées
            d'activités originales et adaptées aux 11-17 ans.
          </p>
          <p>
            Ce site a été créé en collaboration par des animateurs passionnés
            souhaitant mutualiser leurs expériences et leurs bonnes pratiques.
          </p>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById("about-dialog").close()}
          >
            Fermer
          </button>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
