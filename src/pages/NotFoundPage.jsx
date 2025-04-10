import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>Oups ! La page que tu recherches semble avoir disparu...</p>
        <p>Peut-être est-elle partie animer une activité avec les ados ?</p>
        <Link to="/" className="btn-home">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
