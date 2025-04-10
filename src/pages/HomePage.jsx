"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { activities } from "../data/activities";
import "../styles/HomePage.css";
import { motion } from "framer-motion";

function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tagFilter = queryParams.get("tag");
  const typeFilter = queryParams.get("type");
  const sortParam = queryParams.get("sort");

  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    tag: tagFilter || "all",
    type: typeFilter || "all",
    sort: sortParam || "none",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = [...activities];

    // Apply tag filter
    if (activeFilter.tag !== "all") {
      result = result.filter((activity) =>
        activity.tags.includes(activeFilter.tag)
      );
    }

    // Apply type filter
    if (activeFilter.type !== "all") {
      result = result.filter((activity) => activity.type === activeFilter.type);
    }

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          activity.shortDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          activity.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          activity.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (activeFilter.sort === "age") {
      result.sort((a, b) => {
        const ageA = Number.parseInt(a.ageRange.split("-")[0]);
        const ageB = Number.parseInt(b.ageRange.split("-")[0]);
        return ageA - ageB;
      });
    } else if (activeFilter.sort === "duration") {
      result.sort((a, b) => {
        const durationA = a.duration.includes("heure")
          ? Number.parseInt(a.duration)
          : 24;
        const durationB = b.duration.includes("heure")
          ? Number.parseInt(b.duration)
          : 24;
        return durationA - durationB;
      });
    }

    setFilteredActivities(result);
  }, [activeFilter, searchTerm]);

  // Extract unique tags from all activities
  const allTags = [...new Set(activities.flatMap((activity) => activity.tags))];

  // Extract unique types from all activities
  const allTypes = [...new Set(activities.map((activity) => activity.type))];

  // Function to create a slug from activity title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const resetFilters = () => {
    setActiveFilter({
      tag: "all",
      type: "all",
      sort: "none",
    });
    setSearchTerm("");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="cyber-grid"></div>
        <div className="scanline"></div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ActiviTeen
            <span className="glitch-effect">ActiviTeen</span>
            <span className="glitch-effect">ActiviTeen</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Des idées d'activités originales pour animer tes séjours avec des
            11-17 ans
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Rechercher une activité..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Rechercher une activité"
              />
              <div className="search-icon">🔍</div>
            </div>

            <button
              className="filter-toggle-btn"
              onClick={toggleFilter}
              aria-expanded={isFilterOpen}
            >
              <span className="filter-icon">⚙️</span>
              Filtres
            </button>
          </motion.div>
        </div>
      </section>

      <motion.section
        className={`filter-panel ${isFilterOpen ? "open" : ""}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isFilterOpen ? "auto" : 0,
          opacity: isFilterOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="filter-container">
          <div className="filter-group">
            <h3>Catégories</h3>
            <div className="filter-options">
              <button
                className={activeFilter.tag === "all" ? "active" : ""}
                onClick={() => setActiveFilter({ ...activeFilter, tag: "all" })}
              >
                Toutes
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={activeFilter.tag === tag ? "active" : ""}
                  onClick={() => setActiveFilter({ ...activeFilter, tag })}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Types d'activités</h3>
            <div className="filter-options">
              <button
                className={activeFilter.type === "all" ? "active" : ""}
                onClick={() =>
                  setActiveFilter({ ...activeFilter, type: "all" })
                }
              >
                Tous
              </button>
              {allTypes.map((type) => (
                <button
                  key={type}
                  className={activeFilter.type === type ? "active" : ""}
                  onClick={() => setActiveFilter({ ...activeFilter, type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Trier par</h3>
            <div className="filter-options">
              <button
                className={activeFilter.sort === "none" ? "active" : ""}
                onClick={() =>
                  setActiveFilter({ ...activeFilter, sort: "none" })
                }
              >
                Par défaut
              </button>
              <button
                className={activeFilter.sort === "age" ? "active" : ""}
                onClick={() =>
                  setActiveFilter({ ...activeFilter, sort: "age" })
                }
              >
                Âge
              </button>
              <button
                className={activeFilter.sort === "duration" ? "active" : ""}
                onClick={() =>
                  setActiveFilter({ ...activeFilter, sort: "duration" })
                }
              >
                Durée
              </button>
            </div>
          </div>

          <button className="reset-filters-btn" onClick={resetFilters}>
            Réinitialiser les filtres
          </button>
        </div>
      </motion.section>

      <div className="results-info">
        <p>
          {filteredActivities.length} activité
          {filteredActivities.length !== 1 ? "s" : ""} trouvée
          {filteredActivities.length !== 1 ? "s" : ""}
        </p>
        {(activeFilter.tag !== "all" ||
          activeFilter.type !== "all" ||
          searchTerm) && (
          <button className="clear-filters-btn" onClick={resetFilters}>
            Effacer les filtres
          </button>
        )}
      </div>

      <section className="activities-grid">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <motion.article
              key={activity.id}
              className="activity-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="activity-type-badge">{activity.type}</div>
              <div className="activity-image">
                {activity.images && activity.images[0] && (
                  <img
                    src={activity.images[0].src || "/placeholder.svg"}
                    alt={activity.images[0].alt}
                  />
                )}
              </div>
              <div className="activity-tags">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter({ ...activeFilter, tag });
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.shortDescription}</p>
                <div className="activity-meta">
                  <span className="age-range">{activity.ageRange}</span>
                  <span className="duration">{activity.duration}</span>
                </div>
                <Link
                  to={`/activite/${activity.type
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${createSlug(activity.title)}`}
                  state={{ activityId: activity.id }}
                  className="btn-view"
                >
                  Voir l'activité
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </motion.article>
          ))
        ) : (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="no-results-icon"></div>
            <h3>Aucune activité trouvée</h3>
            <p>Essayez de modifier vos critères de recherche.</p>
            <button className="btn-reset" onClick={resetFilters}>
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </section>

      <section className="cta-section">
        <div className="cta-glow cta-glow-1"></div>
        <div className="cta-glow cta-glow-2"></div>

        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Vous avez une idée d'activité à partager ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contribue à notre collection et aide d'autres animateurs à proposer
            des activités originales !
          </motion.p>

          <motion.a
            href="mailto:activiteen@outlook.com?subject=Proposition%20d'activité%20pour%20ActiviTeen&body=Bonjour%20l'équipe%20ActiviTeen%2C%0A%0AJe%20vous%20adresse%20cette%20proposition%20d'activité%20dans%20l'idée%20qu'elle%20puisse%20trouver%20sa%20place%20sur%20votre%20plateforme.%0A%0AVoici%20les%20éléments%20à%20renseigner%20:%0A%0A🔹%20Titre%20de%20l'activité%20:%20%0A🔹%20Type%20d'activité%20(artistique%2C%20sportive%2C%20réflexion%2C%20etc.)%20:%20%0A🔹%20Description%20brève%20:%20%0A🔹%20Objectif%20ou%20bénéfices%20:%20%0A🔹%20Préparation%20:%20%0A🔹%20Déroulement%20:%20%0A🔹%20Conseils%20ou%20variantes%20:%20%0A🔹%20Durée%20estimée%20:%20%0A🔹%20Tranche%20d'âge%20concernée%20:%20%0A🔹%20Matériel%20nécessaire%20:%20%0A%0A📸%20Joindre%20quelques%20photos%20est%20un%20gros%20plus%20:%20elles%20permettent%20de%20valoriser%20l'activité%20sur%20le%20site.%0A%0ABien%20à%20vous%2C%0A%5BPrénom%20Nom%5D"
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px var(--neon-pink)",
            }}
          >
            Proposer une activité
            <span className="btn-icon">✉️</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
