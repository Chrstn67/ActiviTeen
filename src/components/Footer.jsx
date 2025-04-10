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
              <a href="mailto:contact@animados.fr?subject=Proposition%20d'activité&body=Bonjour,%0A%0AJe%20souhaite%20proposer%20une%20activité%20pour%20le%20site%20ActiviTeen.%0A%0ATitre%20:%20%0AType%20d'activité%20:%20%0ADescription%20:%20%0APréparation%20:%20%0ADéroulement%20:%20%0AConseils%20:%20%0ADurée%20:%20%0AÂge%20:%20%0AMatériel%20nécessaire%20:%20%0A%0AMerci%20!">
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
