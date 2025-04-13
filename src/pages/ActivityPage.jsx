"use client";

import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { activities } from "../data/activities";
import "../styles/ActivityPage.css";
import { motion } from "framer-motion";

function ActivityPage() {
  const { type, slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedActivities, setRelatedActivities] = useState([]);

  useEffect(() => {
    // First try to get the activity from the state
    const activityId = location.state?.activityId;
    let foundActivity;

    if (activityId) {
      foundActivity = activities.find((a) => a.id === activityId);
    } else {
      // If no state, try to find by slug and type
      foundActivity = activities.find(
        (a) =>
          a.type.toLowerCase().replace(/\s+/g, "-") === type &&
          a.title
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-") === slug
      );
    }

    if (foundActivity) {
      setActivity(foundActivity);

      // Find related activities based on tags or type
      const related = activities
        .filter(
          (a) =>
            a.id !== foundActivity.id &&
            (a.tags.some((tag) => foundActivity.tags.includes(tag)) ||
              a.type === foundActivity.type)
        )
        .slice(0, 3);

      setRelatedActivities(related);
    } else {
      navigate("/not-found");
    }
  }, [type, slug, location.state, navigate]);

  // Function to create a slug from activity title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  if (!activity) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Chargement de l'activité...</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === activity.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? activity.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="activity-page">
      <nav className="breadcrumb" aria-label="fil d'Ariane">
        <ol>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li aria-current="page">{activity.title}</li>
        </ol>
      </nav>

      <motion.article
        className="activity-detail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-title={activity.title}
        data-url={window.location.href}
      >
        <header className="activity-header">
          <div className="activity-type-badge large d-none d-md-block">
            {activity.type}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {activity.title}
          </motion.h1>
          <div className="activity-meta">
            <span className="age-range">
              <i className="icon-age"></i> {activity.ageRange}
            </span>
            <span className="duration">
              <i className="icon-time"></i> {activity.duration}
            </span>
          </div>
          <div className="activity-tags">
            {activity.tags.sort().map((tag) => (
              <Link key={tag} to={`/?tag=${tag}`} className="tag">
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <section className="activity-gallery">
          {activity.images && activity.images.length > 0 && (
            <div className="gallery-container">
              <motion.div
                className="main-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src={
                    activity.images[currentImageIndex].src || "/placeholder.svg"
                  }
                  alt={activity.images[currentImageIndex].alt}
                />
              </motion.div>

              {activity.images.length > 1 && (
                <div className="gallery-controls">
                  <button
                    onClick={prevImage}
                    className="gallery-control prev"
                    aria-label="Image précédente"
                  >
                    &#10094;
                  </button>
                  <div className="gallery-dots">
                    {activity.images.map((_, index) => (
                      <button
                        key={index}
                        className={`gallery-dot ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <button
                    onClick={nextImage}
                    className="gallery-control next"
                    aria-label="Image suivante"
                  >
                    &#10095;
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        <section
          className="activity-content"
          data-title={activity.title}
          data-url={window.location.href}
        >
          <div className="activity-description">
            <motion.p
              className="main-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {activity.description}
            </motion.p>

            <motion.div
              className="activity-section preparation-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>Préparation</h3>
              <div
                dangerouslySetInnerHTML={{ __html: activity.preparation }}
              ></div>
            </motion.div>

            <motion.div
              className="activity-section deroulement-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3>Déroulement</h3>
              <div
                dangerouslySetInnerHTML={{ __html: activity.deroulement }}
              ></div>
            </motion.div>

            <motion.div
              className="activity-section variantes-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3>Variantes</h3>
              <div
                dangerouslySetInnerHTML={{ __html: activity.variantes }}
              ></div>
            </motion.div>

            <motion.div
              className="activity-section conseils-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3>Conseils</h3>
              <div
                dangerouslySetInnerHTML={{ __html: activity.conseils }}
              ></div>
            </motion.div>
          </div>

          <motion.div
            className="materials-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2>Matériel nécessaire</h2>
            <ul className="materials-list">
              {activity.materials.sort().map((material, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                >
                  {material}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section className="activity-actions">
          <button
            className="btn-back"
            onClick={() => navigate("/")}
            aria-label="Retour à la liste"
          >
            <span className="btn-icon">←</span>
            Retour aux activités
          </button>
          <div className="action-buttons">
            <button
              className="btn-print"
              onClick={() => window.print()}
              aria-label="Imprimer cette activité"
            >
              <span className="btn-icon">🖨️</span>
              Imprimer
            </button>
            <button
              className="btn-share"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: activity.title,
                    text: activity.shortDescription,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Lien copié dans le presse-papier !");
                }
              }}
            >
              <span className="btn-icon">🔗</span>
              Partager
            </button>
          </div>
        </section>
      </motion.article>

      {relatedActivities.length > 0 && (
        <section className="related-activities">
          <h2>Activités similaires</h2>
          <div className="related-grid">
            {relatedActivities.map((relatedActivity, index) => (
              <motion.article
                key={relatedActivity.id}
                className="related-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="related-type-badge">{relatedActivity.type}</div>
                {relatedActivity.images && relatedActivity.images[0] && (
                  <img
                    src={relatedActivity.images[0].src || "/placeholder.svg"}
                    alt={relatedActivity.images[0].alt}
                    className="related-image"
                  />
                )}
                <div className="related-content">
                  <h3>{relatedActivity.title}</h3>
                  <p>{relatedActivity.shortDescription}</p>
                  <Link
                    to={`/activite/${relatedActivity.type
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${createSlug(
                      relatedActivity.title
                    )}`}
                    state={{ activityId: relatedActivity.id }}
                    className="btn-view-small"
                  >
                    Voir l'activité
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ActivityPage;
