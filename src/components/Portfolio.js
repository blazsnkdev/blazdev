import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Coffee,
  GitBranch,
  Heart,
  BookOpen,
  Palette,
  Briefcase,
} from "lucide-react"

const Portfolio = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#7c3aed",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Code size={24} color="white" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid #d1d5db",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Proyectos
          </button>
          <a
            href="https://wa.me/51943787437"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#7c3aed",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contacto
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            Desarrollador .NET &<span style={{ color: "#7c3aed" }}> Full Stack</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto 32px",
              lineHeight: "1.6",
            }}
          >
            Especialista en .NET Core y arquitectura limpia. Apasionado por el diseño y desarrollo de aplicaciones
            empresariales.
          </p>

          {/* Profile Image - Preparado para imagen real */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
            <div
              style={{
                width: "128px",
                height: "128px",
                background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                padding: "4px", // Espacio para el borde
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden", // Para que la imagen se recorte en círculo
                }}
              >
                {/* Aquí puedes reemplazar con tu imagen */}
                <img
                  src="/images/blaz_img1.jpg"
                  alt="Camilo Blas Asto Aiquipa"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  onError={(e) => {
                    // Fallback si no hay imagen
                    e.target.style.display = "none"
                    e.target.nextSibling.style.display = "flex"
                  }}
                />
                {/* Fallback text si no hay imagen */}
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#7c3aed",
                    display: "none", // Se mostrará solo si falla la imagen
                  }}
                >
                  CA
                </span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
              Camilo Blas Asto Aiquipa
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
              <span
                style={{
                  padding: "4px 12px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "16px",
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                19 años
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "16px",
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                Computación e Informática
              </span>
              <span
                style={{
                  padding: "4px 12px",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "16px",
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                Cibertec (2022-2024)
              </span>
            </div>
          </div>

          {/* Skills - Exactamente 3x2 como especificaste */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "16px",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
            className="skills-grid"
          >
            {/* FILA 1: C#, ASP.NET, SQL */}

            {/* C# */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#ede9fe",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <Code size={24} color="#7c3aed" />
              </div>
              <h3 style={{ fontWeight: "600", color: "#7c3aed", marginBottom: "4px", fontSize: "16px" }}>C#</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Favorito</p>
            </div>

            {/* ASP.NET */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#ede9fe",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <span style={{ color: "#7c3aed", fontWeight: "bold", fontSize: "14px" }}>ASP</span>
              </div>
              <h3 style={{ fontWeight: "600", color: "#7c3aed", marginBottom: "4px", fontSize: "16px" }}>ASP.NET</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Framework</p>
            </div>

            {/* SQL */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <Database size={24} color="#2563eb" />
              </div>
              <h3 style={{ fontWeight: "600", color: "#2563eb", marginBottom: "4px", fontSize: "16px" }}>SQL</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Base de Datos</p>
            </div>

            {/* FILA 2: Java, JavaScript, Git */}

            {/* Java */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fecaca",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <Coffee size={24} color="#dc2626" />
              </div>
              <h3 style={{ fontWeight: "600", color: "#dc2626", marginBottom: "4px", fontSize: "16px" }}>Java</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Backend</p>
            </div>

            {/* JavaScript */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef3c7",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <span style={{ color: "#d97706", fontWeight: "bold", fontSize: "18px" }}>JS</span>
              </div>
              <h3 style={{ fontWeight: "600", color: "#d97706", marginBottom: "4px", fontSize: "16px" }}>JavaScript</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Frontend</p>
            </div>

            {/* Git */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <GitBranch size={24} color="#475569" />
              </div>
              <h3 style={{ fontWeight: "600", color: "#475569", marginBottom: "4px", fontSize: "16px" }}>Git</h3>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Control de Versiones</p>
            </div>
          </div>

                    <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:camiloblas0914@outlook.com"
              className="contact-button"
              style={{
                padding: "12px 32px",
                backgroundColor: "#7c3aed",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              <Mail size={16} />
              Contáctame
            </a>

            <a
              href="https://github.com/blazsnkdev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 32px",
                backgroundColor: "white",
                color: "#374151",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <Github size={16} />
              Ver Proyectos
            </a>
          </div>


          {/* Social Links */}
          <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            <a href="https://github.com/blazsnkdev" target="_blank" style={{ color: "#9ca3af", transition: "color 0.2s ease" }}>
              <Github size={24} />
            </a>
            <a href="https://pe.linkedin.com/in/camilo-blas-asto-aiquipa-547961358" target="_blank" style={{ color: "#9ca3af", transition: "color 0.2s ease" }}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:camiloblas0914@outlook.com" style={{ color: "#9ca3af", transition: "color 0.2s ease" }}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section style={{ backgroundColor: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Sobre Mí
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Personal Info */}
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#7c3aed", marginBottom: "24px" }}>
                Mi Historia
              </h3>
              <div style={{ space: "16px" }}>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.7",
                    marginBottom: "16px",
                    fontSize: "16px",
                  }}
                >
                  Soy un desarrollador apasionado de 19 años, estudiante de Computación e Informática en
                  <strong style={{ color: "#7c3aed" }}> Cibertec desde 2022</strong>. Mi especialización en
                  <strong style={{ color: "#7c3aed" }}> Desarrollo de Aplicaciones Empresariales en .NET Core </strong>
                  me ha permitido profundizar en mi lenguaje favorito: <strong style={{ color: "#7c3aed" }}>C#</strong>.
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.7",
                    marginBottom: "16px",
                    fontSize: "16px",
                  }}
                >
                  Tengo sólidos conocimientos en <strong style={{ color: "#7c3aed" }}>patrones de diseño</strong> y
                  <strong style={{ color: "#7c3aed" }}> arquitectura limpia</strong>, lo que me permite crear
                  aplicaciones robustas, escalables y mantenibles.
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.7",
                    fontSize: "16px",
                  }}
                >
                  Más allá de la programación, soy <strong style={{ color: "#7c3aed" }}>catequista</strong> y me
                  apasiona el <strong style={{ color: "#7c3aed" }}>deporte</strong>. Creo firmemente que el equilibrio
                  entre la vida personal, espiritual y profesional es clave para el crecimiento integral.
                </p>
              </div>
            </div>

            {/* Skills & Interests */}
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#7c3aed", marginBottom: "24px" }}>
                Mis Pasiones
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <Palette size={32} color="#7c3aed" style={{ margin: "0 auto 8px" }} />
                  <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>Diseño</h4>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>UI/UX & Software</p>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <Heart size={32} color="#dc2626" style={{ margin: "0 auto 8px" }} />
                  <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>Deporte</h4>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>Vida Activa</p>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <BookOpen size={32} color="#059669" style={{ margin: "0 auto 8px" }} />
                  <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>Catequesis</h4>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>Servicio</p>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <Briefcase size={32} color="#7c3aed" style={{ margin: "0 auto 8px" }} />
                  <h4 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>Desarrollo</h4>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>Aplicaciones</p>
                </div>
              </div>

              {/* Technical Expertise */}
              <div style={{ marginTop: "32px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                  Especialización Técnica
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    .NET Core
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    ASP.NET
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Entity Framework
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Clean Architecture
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Design Patterns
                  </span>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    SOLID Principles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ marginBottom: "16px", fontSize: "16px" }}>
            © 2025 Camilo Blas Asto Aiquipa. Desarrollador .NET especializado en aplicaciones empresariales.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            <a href="https://github.com/blazsnkdev" target="_blank" style={{ color: "#9ca3af", textDecoration: "none" }}>
              <Github size={20} />
            </a>
            <a href="https://pe.linkedin.com/in/camilo-blas-asto-aiquipa-547961358" target="_blank" style={{ color: "#9ca3af", textDecoration: "none" }}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:camiloblas0914@outlook.com" style={{ color: "#9ca3af", textDecoration: "none" }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
