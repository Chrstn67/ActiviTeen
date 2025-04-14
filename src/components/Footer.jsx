"use client";

import "../styles/Footer.css";
import { FaWhatsapp } from "react-icons/fa"; // Importation de l'icône WhatsApp

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
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("mentions-legales-dialog")
                    .showModal();
                }}
              >
                Mentions légales
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Réseau</h3>
          <ul>
            <li>
              <a
                href="https://whatsapp.com/channel/0029Vb6AgTY5a248YKSr103x"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaWhatsapp style={{ marginRight: "8px" }} />{" "}
                {/* Icône WhatsApp */}
                Chaîne WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="Logos">
        <img
          src="ActiviTeen-Logo.png"
          alt="Logo développeur"
          className="footer-logo"
        />
        <img src="Logo.jpg" alt="Logo développeur" className="footer-logo" />
      </section>
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

      <dialog id="mentions-legales-dialog" className="modal">
        <div className="modal-content">
          <h2>Mentions Légales</h2>
          <div className="legal-content">
            <p>
              1 - Édition du site : En vertu de l'article 6 de la loi n°
              2004-575 du 21 juin 2004 pour la confiance dans l'économie
              numérique, il est précisé aux utilisateurs du site internet
              https://chrstn67.github.io/ActiviTeen/#/ l'identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi:
              Propriétaire du site : Christian HUMBERT - Contact :
              <i>chrstn.hmbrt67@outlook.com</i> - Hébergeur : GitHub
            </p>

            <p>
              2 - Propriété intellectuelle et contrefaçons : Christian HUMBERT
              est propriétaire des droits de propriété intellectuelle et détient
              les droits d'usage sur tous les éléments accessibles sur le site
              internet, notamment les textes, images, graphismes, logos, vidéos,
              architecture, icônes et sons. Toute reproduction, représentation,
              modification, publication, adaptation de tout ou partie des
              éléments du site, quel que soit le moyen ou le procédé utilisé,
              est interdite, sauf autorisation écrite préalable de Christian
              HUMBERT. Toute exploitation non autorisée du site ou de l'un
              quelconque des éléments qu'il contient sera considérée comme
              constitutive d'une contrefaçon et poursuivie conformément aux
              dispositions des articles L.335-2 et suivants du Code de Propriété
              Intellectuelle.
            </p>

            <p>
              3 - Limitations de responsabilité : Christian HUMBERT ne pourra
              être tenu pour responsable des dommages directs et indirects
              causés au matériel de l'utilisateur, lors de l'accès au site
              https://chrstn67.github.io/ActiviTeen/#/. Christian HUMBERT
              décline toute responsabilité quant à l'utilisation qui pourrait
              être faite des informations et contenus présents sur
              https://chrstn67.github.io/ActiviTeen/#/. Christian HUMBERT
              s'engage à sécuriser au mieux le site
              https://chrstn67.github.io/ActiviTeen/#/, cependant sa
              responsabilité ne pourra être mise en cause si des données
              indésirables sont importées et installées sur son site à son insu.
              Des espaces interactifs (espace contact) sont à la disposition des
              utilisateurs. Christian HUMBERT se réserve le droit de supprimer,
              sans mise en demeure préalable, tout contenu déposé dans cet
              espace qui contreviendrait à la législation applicable en France,
              en particulier aux dispositions relatives à la protection des
              données. Le cas échéant, Christian HUMBERT se réserve également la
              possibilité de mettre en cause la responsabilité civile et/ou
              pénale de l'utilisateur, notamment en cas de message à caractère
              raciste, injurieux, diffamant, ou pornographique, quel que soit le
              support utilisé (texte, photographie …).
            </p>

            <p>
              4 - CNIL et gestion des données personnelles : Conformément aux
              dispositions de la loi 78-17 du 6 janvier 1978 modifiée,
              l'utilisateur du site https://chrstn67.github.io/ActiviTeen/#/
              dispose d'un droit d'accès, de modification et de suppression des
              informations collectées. Pour exercer ce droit, envoyez un message
              à notre Délégué à la Protection des Données : Christian HUMBERT -
              chrstn.hmbrt67@outlook.com.
            </p>

            <p>
              5 - Liens hypertextes et cookies : Le site
              https://chrstn67.github.io/ActiviTeen/#/ contient des liens
              hypertextes vers d'autres sites et dégage toute responsabilité à
              propos de ces liens externes ou des liens créés par d'autres sites
              vers https://chrstn67.github.io/ActiviTeen/#/.
            </p>

            <p>
              6 - Droit applicable et attribution de juridiction : Tout litige
              en relation avec l'utilisation du site
              https://chrstn67.github.io/ActiviTeen/#/ est soumis au droit
              français. En dehors des cas où la loi ne le permet pas, il est
              fait attribution exclusive de juridiction aux tribunaux
              compétents.
            </p>
          </div>
          <button
            className="btn-secondary"
            onClick={() =>
              document.getElementById("mentions-legales-dialog").close()
            }
          >
            Fermer
          </button>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
